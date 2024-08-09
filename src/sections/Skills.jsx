import React from 'react'
import Tag from '../components/Tag'

const skills = [
    "SQL & NoSQL Databases",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "TypeScript & JavaScript",
    "HTML & CSS",
    "Tailwind CSS",
    "AGILE/SCRUM",
    "Git & GitHub",
    "RESTful APIs",
]

const Skills = () => {
  return (
    <div className='bg-white rounded-xl shadow-xl p-2 md:p-5 mt-5'>
        <h2 className='text-lg md:text-2xl text-black mb-3 font-bold'>Skills</h2>
        <ul className='flex flex-wrap leading-10'>
            {skills.map((skill, index) => (
                <li key={index} className='mr-2'>
                   <Tag name={skill} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Skills