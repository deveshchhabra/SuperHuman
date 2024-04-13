// import  Profile from "../../assets/img/Group 315.jpg"
import Image from "next/image"

import Link from 'next/link'
import  Profile from "../../assets/img/watch-features.png"
export default function watches(){
    return(
        <>
        <li><Link  href="/"><Image  className="rounded text-white" alt="logo" src={Profile} width={770} height={480}></Image></Link></li></>
    )
}