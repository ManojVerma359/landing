import React from 'react'
import preloder from  '../assets/images/preloder.gif'

const PreLoder = () => {
    setTimeout(() => {
        document.getElementById("preloder").classList.add("hidden")
        document.body.classList.remove("overflow-hidden")
        
    },4000);
  return (
<>
<div id='preloder'className='min-h-screen fixed top-0 start-0 bg-white  w-full z-50 flex justify-center items-center'>
    <div className='text-black'>
     <img className='w-[150px]' src={preloder} alt="#id" />
    </div>

</div>
</> 
 )
}

export default PreLoder