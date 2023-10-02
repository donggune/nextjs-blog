import Image from 'next/image'
import React from 'react'
import profileImage from '../../public/images/profile.png'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='text-center'>
        <Image 
         priority className='rounded-full mx-auto' src={profileImage} alt='user' width={250} height={250}/>
        <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Lion"}</h2>
        <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
        <p className='mb-2'>꿈을 코딩하는 사람, merged</p>
        <Link className='bg-yellow-500 font-bold rounded-xl py-1 px-5' href='/contact'>Contact Me</Link>
    </section>
  )
}
