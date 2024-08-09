import { AtSign, GitBranch, Linkedin, Twitter, X } from 'lucide-react'
import React from 'react'

const Bio = () => {
  return (
    <div className='bg-white rounded-xl shadow-xl p-2 md:p-5'>
        <div className='flex items-center justify-center'>
        <img src='/profile1.jpeg' alt='profile picture' className='h-[300px] rounded-xl '></img>
        </div>
        <h1 className='text-lg md:text-2xl font-bold '>Antony Gitau</h1>
        <p className='text-sm md:text-base text-gray-500'>I am a junior Full-Stack Engineer</p>
        <div className='flex flex-row gap-2 mt-2'>
            <a href='https://www.linkedin.com/in/gitau-antony-1a36b830b/' target='_blank' rel='noreferrer noopener'>
            <Linkedin className='text-blue-500 hover:text-blue-800 cursor-pointer h-5'/>
            </a>
            <a href='mailto:antonygitau04@gmail.com' target='_blank' rel='noreferrer noopener'>
            <AtSign className=' hover:text-orange-400 cursor-pointer h-5'/>
            </a>
            <a href='https://x.com/Gitauantony3' target='_blank' rel='noreferrer noopener'>
            <Twitter  className='text-blue-500 hover:text-blue-800 cursor-pointer h-5'/>
            </a>
            <a href='https://github.com/realgitau' target='_blank' rel='noreferrer noopener'>
            <GitBranch className='text-red-600  cursor-pointer h-5'/>
            </a>
        </div>
    </div>
  )
}

export default Bio