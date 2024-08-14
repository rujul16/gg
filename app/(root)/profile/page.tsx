"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function Profile() {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isLoaded && !userId) {
      router.replace('/sign-in');
    } else if (isLoaded && userId) {
      setIsAuthenticated(true);
    }
  }, [isLoaded, userId, router]);

  return (
    <div className='flex'>
      {isAuthenticated ? (
        <div style={{ height: '80vh', width: '100vw' }} className='flex items-center justify-center'>
          {/* Add your profile content here */}
          Profile Content
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
