import React from 'react'
import SectionHeading from '../SectionHeading'
import SectionSubHeading from '../SectionSubHeading'
import projects from '@/app/data/ProjectData'
import Image from 'next/image'
import CardLink from '../CardLink'
import Link from 'next/link'
import CardAction from '../CardAction'

export default function Projects() {
  return (
    <section id='projects' className='px-4 py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Projects"} />
      <SectionSubHeading text={"Browse our best works"} />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
        {projects?.map((item, index) => (
          <ProjectCard
            title={item.title}
            desc={item.description}
            imgUrl={item.imgUrl}
            websiteUrl={item.url}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, imgUrl, websiteUrl }) {
  return (
    <Link href={websiteUrl} className=''>
      <div className='h-full group px-4 py-6 border border-stone-900 bg-neutral-900/80 hover:bg-neutral-900 rounded-md flex flex-col gap-3 items-start justify-between'>
        <div className='flex flex-col gap-2'>
        <CardAction text={"View Demo"} />

          {/* <a href={websiteUrl} className='text-neutral-500 link link-hover outline-offset-8'>View More</a> */}
          <h2 className='text-2xl font-medium'>{title}</h2>
          <p className='text-neutral-600 text-sm'>{desc}</p>
        </div>
        <div className=' w-full h-[280px] overflow-hidden rounded-2xl'>
          <Image width={500} height={320} loading='lazy' placeholder='blur' blurDataURL='https://placehold.co/10' className='h-full w-full object-contain' src={imgUrl} alt="project image" />
        </div>
      </div>
    </Link>
  )
}