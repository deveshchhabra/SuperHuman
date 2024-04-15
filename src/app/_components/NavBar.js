"use client"
import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
    const links=[{
        name:"Product",
        submenue:true,
    sublinks:[
        
        {
            Head:"Solutions",
            sublink:[
                {name:'T-shirt',link:'/'},
                {name:'Casual-shirt',link:'/'},
                {name:'Formal-shirt',link:'/'},
                {name:'Formal-shirt',link:'/'},

            ]
        },
        {
            Head:"Learn",
            sublink:[
                {name:'Superhuman AI',link:'/'},
                {name:'Superhuman Outlook',link:'/'},
                

            ]
        },
        {
            Head:"Learn",
            sublink:[
                {name:'T-shirt',link:'/'},
                {name:'Casual-shirt',link:'/'},
                {name:'Formal-shirt',link:'/'},
                {name:'Formal-shirt',link:'/'},

            ]
        }
        , 
    ]},
{name:"Resources"},{name:"Pricing"},{name:"Love💜"}]
  return (
<>
{
    links.map((link)=>(
        <div key={link.id}>
            <div className='px-3 text-left md:cursor-pointer group'>
                <h1 className='py-7'>{link.name}</h1>
                {link.submenue &&(
                        <div>
                            <div className='absolute top-20 hidden group-hover:block hover:block'>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-gray-500 rotate-45'></div>
                                </div>
                                <div className='bg-black text-white border border-white rounded-lg p-3.5 grid grid-cols-2 gap-10'>
                                    {
                                        link.sublinks.map((mysublink)=>(<div key={mysublink.id}>
                                            {console.log(mysublink.Head)}
                                            {<h1 className='text-lg  '>{mysublink.Head}</h1>}
                                            {mysublink.sublink.map((slink)=>(
                                                <ul key={slink.name} >
                                                <li className='text-sm my-2.5' key={slink.name} >
                                                    <Link href={slink.link}>{slink.name}</Link></li>
                                                    </ul>
                                            ))}
                                            {console.log(mysublink.sublink)}
                                            </div>)) }
                                </div>
                                </div>
                            </div>
                    )
                }
            </div></div>))}</>)}
