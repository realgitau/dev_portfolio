import { Link } from 'lucide-react'
import React from 'react'

const projects = [
    {
        name: "JM Marketing Agency",
        description: "A marketing agency website built with React and Tailwind CSS.",
        url: "jmmarketingke.vercel.app",
        img: "/profile1.jpeg"
    },
    {
        name: "JM Marketing Agency",
        description: "A marketing agency website built with React and Tailwind CSS.",
        url: "jmmarketingke.vercel.app",
        img: "/jmmarketing.png"
    },
    {
        name: "JM Marketing Agency",
        description: "A marketing agency website built with React and Tailwind CSS.",
        url: "jmmarketingke.vercel.app",
        img: "/jmmarketing.png"
    },
    {
        name: "JM Marketing Agency",
        description: "A marketing agency website built with React and Tailwind CSS.",
        url: "jmmarketingke.vercel.app",
        img: "/jmmarketing.png"
    }
]

const Projects = () => {
  return (
    <div>
        <h1 className='text-2xl md:text-4xl font-bold p-4'>Recent Projects</h1>
        <ul>
            <li className='flex flex-col gap-3'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-white rounded-xl shadow-xl p-4'>
                        <h2 className='font-bold text-xl md:text-2xl'>{project.name}</h2>
                        
                        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                            <img src={project.img} alt={project.name} className='rounded-xl h-28 w-24'/>
                            <div>
                                <p>{project.description}</p>
                                <a href={project.url
                                } className='text-sm flex items-center justify-center'>
                                    <Link className='h-4'/>
                                    {project.url}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </li>
        </ul>
    </div>
  )
}

export default Projects