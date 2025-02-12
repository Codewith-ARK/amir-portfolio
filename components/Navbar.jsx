import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='px-4 py-3 lg:px-32 lg:py-3 grid grid-cols-1 lg:grid-cols-2 items-center gap-3'>
      <Link href={"/"} className='flex justify-center lg:justify-start items-baseline gap-3'>
        <Image width={30} height={30} src={"/logo_light.png"} alt='brand logo' />
        <h1 className='text-3xl font-bold'>ARK<span className='text-red-600'>iva</span></h1>
      </Link>
      <div className='flex justify-center lg:justify-end gap-6'>
        <Link className='link link-hover text-sm font-bold uppercase' href={"/"}>Home</Link>
        <Link className='link link-hover text-sm font-bold uppercase' href={"/#projects"}>Projects</Link>
        <Link className='link link-hover text-sm font-bold uppercase' href={"/#contact"}>Contact</Link>
        <Link className='link link-hover text-sm font-bold uppercase' href={"/blog"}>Blog</Link>
      </div>
    </nav>
  )
}
