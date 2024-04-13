"use client"
import Link from 'next/link'
import React, { useState } from 'react'




const header = () => {
  const [Ham,setHam]=useState(true);

  return (
        <header>
    
            <nav  className=''>
              <div className='md:w-auto w-80% md:px-5 px-2 md:py-5 py-2 mx-5 my-5 h-20 flex   text-center   justify-between '>
                <div className='text-white  md:flex '>
                  <div className='uppercase  tracking-wider  min-h-fit  text-2xl  '>Superhuman</div>
                  <ul className={`md:16px  items-center md:flex flex-col  flex-wrap text-xl md:gap-[5vw] gap-[5vh] justify-between md:justify-center px-3 py-2 
                   md:px-2 md:place-items-center ${Ham?'visible':'invisible'}`}>
                    <li  className=''>Product</li>
                    <li  className=''>Resources</li>
    
                    <li className=''>Pricing</li>
                    <li className=''>Love</li>
    
                  </ul>
                  
                </div>
                <button className='text-white text-xl bg-gradient-to-t from-[#c654a6] to-[#dfa6ee] rounded-md  h-10 px-1  py-2 my-1 '>GetStarted</button>
                <div className="flex item-center gap-6 md:hidden">{Ham?(
              <button  className="cursor-pointer text-2xl text-white" onClick={()=>setHam(false) }>&#8801;</button>):(<button  className=" cursor-pointer text-white" onClick={()=>setHam(true)}>X</button>)} 
             
              </div>
              </div>
            
    
              
           
            </nav>
            </header>
    
      )
}

export default header