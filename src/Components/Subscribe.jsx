import React from 'react'

const Subscribe = () => {
  return (
<>
<div className='container mx-auto flex items-center flex-col sm:mt-44 mt-20 mb-20 '> 
  <h4 className='sm:text-[28px] text-[25px] font-bold living_txt ff_poppins'>Subscribe our newsletter</h4>
  <p className='text-base font-light ff_poppins leading-10 :smpt-10 pt-4'>Subscribe to our newsletter for daily/weekly <span className='text-base font-light ff_poppins block'>update of our products and services.</span></p>
<div className='flex mt-14 flex-wrap items-center justify-center gap-2.5'>
<div className=' flex md:w-[388px] w-[320px] border border-solid  bg-gradient-to-b from-[#fd749b]  to-[#281acb] p-[1px] rounded-[100px] '>
<input type="text" placeholder='EMAIL'className='text-base font-light ff_poppins w-[100%]  outline-0 py-4 px-5 rounded-[100px]' />
  </div>    
<div className='sm:pt-0 pt-4'>
<button className='more_btn text-base font-bold ff_poppins text-white px-12 rounded-[100px] py-4'>
  SUBMIT
  </button>
</div>
</div>
</div>

</>
  )
}

export default Subscribe