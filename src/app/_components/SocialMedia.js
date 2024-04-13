import React from 'react'
const SocialMedia = ({Icons}) => {
  return (
    <div>
        {console.log(Icons.map((icon)=>(icon.name)))}
        {
            Icons.map((icon)=>(
                <span key={icon.name} className='p-2 cursor-pointer inline-flex items-center '>
                    <ion-icon  className="text-white" name={icon.name}>{icon.name}</ion-icon>
                </span>
            ))
        }
    </div>
  )
}
export default SocialMedia