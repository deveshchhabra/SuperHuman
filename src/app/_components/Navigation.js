"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { NavBar } from './NavBar'
const Navigation = () => {
    const [Ham, setHam] = useState(false);
    return (
    <nav className='text-white bg-gradient-to-t from-black to-indigo-800 '>
        <div className='flex items-center font-medium justify-around px-1 py-1 mx-1 my-1'>
            <div className='z-10 p-4 md:w-auto w-full'>
            {/* <Link href='/'><img src={"https://media.licdn.com/dms/image/C560BAQE8WsteEbokHA/company-logo_200_200/0/1631383163122?e=1721260800&v=beta&t=2e7rUrCPOU8rokhOckNQpNmPJav094XqJlbdW5_YLMA"} alt="logo" className='md:cursor-poiner h-9' ></img></Link> */}
            <div className='uppercase  tracking-wider  min-h-fit  text-xl font-mono  '>Superhuman</div>
            
          
            <div className="flex items-end md:hidden gap-6 ">{Ham ? (
          <button  className="cursor-pointer" onClick={()=>setHam(!Ham) }>☰</button>):(<button  className=" cursor-pointer" onClick={()=>setHam(!Ham)}>X</button>)}
           </div>
           </div>

           

         
         
            <ul className='md:flex hidden   uppercase items-center gap-8 font-[Poppins]'>
                
                <NavBar/>
            </ul>
            <div className='md:block hidden'>
            <button className='bg-gradient-to-t from-[#6d355e] to-[#ae318f] px-6 py-2 rounded-md'>Get Started</button>
          </div>
          
         
          </div>
             
           {/* Mobile nav       */}
           
           <ul className={`md:hidden text-white absolute w-full h-full bottom-0 py-24 pl-24 duration-500 ${Ham ?`left-[10]`:`left-[-100%]`}`} >   
          
           <li>
                    
                <NavBar/>
               
                </li>
           <div className='md:block '>
           <button className='bg-gradient-to-t from-[#6d355e] to-[#ae318f] px-6 py-2 rounded-md'>Get Started</button>
              
        
          
            </div>
           </ul>
           
    </nav>

  )
}
export default Navigation