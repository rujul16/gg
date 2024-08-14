"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex justify-evenly items-center'>
      <div>
      <SignIn/>
      </div>
    <div style={{height:'80vh',width:'45vw'}} className='flex items-center justify-center'>
        Illustrations
    </div>
    </div>
  );
}
