import React from 'react'
import SectionHeading from '../SectionHeading'
import featuresData from '@/data/FeaturesCardData';

export default function Features() {
  return (
    <section id='services' className='px-4 py-20 flex flex-col justify-center items-center'>
      <SectionHeading text={"Features"} />

      <div id='features-container' className='mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {featuresData?.map((item, index) => (
          <FeaturesCard
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            key={index}
          />))}
      </div>
    </section>
  )
}

function FeaturesCard({ icon, title, desc }) {
  return (
    <div className='px-6 py-10 bg-zinc-950 flex flex-col gap-3 rounded-md border border-stone-900'>
      <div className='text-[28px]'>{icon}</div>
      <div>
        <h6 className='text-lg font-medium'>{title}</h6>
        <p className='text-stone-600 text-sm'>{desc}</p>
      </div>
    </div>
  )
}