"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex justify-evenly items-center'>
      <SignUp/>
    <div style={{height:'80vh',width:'45vw'}} className='flex items-center justify-center'>
        Illustrations
    </div>
    </div>
  );
}
