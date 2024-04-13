import  Profile from "../../assets/img/Group 315.jpg"
import Link from 'next/link';
import Image from 'next/image'
import {Kalam} from 'next/font/google'
const Robot= Kalam({
  weight:'300',
  subsets:['latin'],
  display:'swap'
}) 
//  "bg-slate-800  text-white text-center"

export default function Header()
{
    return (
      <nav>
          
           <div className="bg-slate-800  text-white text-center">
          <h1 className=  {Robot.className}>EMBRACE INDEPENDENCE,TRUST YOUR GUARDIAN</h1>
            </div>     
           <ul className="flex px-9 py-9 justify">
                <li><Link  href="/"><Image className="rounded text-white" alt="logo" src={"https://media.licdn.com/dms/image/C4E0BAQF35gr2-YvPfw/company-logo_200_200/0/1673775833161/stealthera_logo?e=2147483647&v=beta&t=j7rDO3MSyUMUcoyJ-OAyi-pHYJh8zx-vmidV_W_1K04"}
                  width={50}
                  height={30}></Image></Link></li>
                  <li className="py-29"><Link className=" text-blue-800  " href="/">StealthEra</Link></li>
                
                <li><Link className=" text-white py-10 px-8" href="/">Home</Link></li>
                  
                  <li><Link className=" text-white  px-8" href="/Contact">About</Link></li>

                  <li><Link className=" text-white  px-8" href="/Contact">Contact</Link></li>
                  <li><Link className=" text-white px-8" href="/Cart">Cart</Link></li>

               
           </ul>
      </nav>
    )
    }
 
    
