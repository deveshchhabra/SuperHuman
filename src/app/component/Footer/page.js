import Link from 'next/link'
export default function footer(){
    return(
        <>
        <div className=" flex justify-center items-center">
            <h1 className='h-22 w-49  bg-blue-400 text-white flex justify-center items-center'>Want To Try Smart Brand </h1>
            <br></br>
        </div>
    
    
    <div className='bg-cyan-500 text-center'><Link className=
    " text-white px-8" href="/Contact">&#169; StealthEra  All RightReserved</Link>
   </div>
   </>
    )


}