"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

// Define types for form data and errors
interface FormData {
  username?: string;
  email?: string;
  password?: string;
}

interface Error {
  message: string;
}

// SignUp component
export default function SignUp() {
  // Initialize state with type annotations
  const [formData, setFormData] = useState<FormData>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);

      // Redirect after successful signup (using Next.js Link)
      window.location.href = '/';

    } catch (error) {
      setLoading(false);
      setError((error as Error).message);
    }
  };

  return (
    <div className='flex rounded-lg justify-center m-auto' style={{background: '#00000033',width:'40vw'}}>
    <div className='p-3 max-w-lg mx-auto ' style={{height:'80vh',width:'45vw'}}>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign IN</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-9'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        {/* <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        /> */}
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign IN'}
        </button>
        {/* <OAuth/> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't Have an account?</p>
        <Link href='/profile'>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
    
    </div>
  );
}
