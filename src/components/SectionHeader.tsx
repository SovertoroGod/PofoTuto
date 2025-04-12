
import React from 'react'

export const SectionHeader = (
 { title, subtitle, description} : { title: string; subtitle: string; description: string }
) => {
  return (
      <div className='mt-8'>

            <p className="bg-gradient-to-r from-emerald-500 to-sky-400 text-transparent tracking-wider font-bold text-lg text-center bg-clip-text uppercase">{title}</p>
    
        
        <h1 className="text-2xl font-bold text-center mt-8">{subtitle}</h1>
        <p className="text-center text-white/70 mt-8">{description}</p>
    </div>
  )
}

export default SectionHeader