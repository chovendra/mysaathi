import React from 'react'
import MatchesLeft from './MatchesLeft'
import MatchesRight from './MatchesRight'

const Matches = () => {
  return (
    <>
    <div className='w-full h-[90px]'/>
    <div className='w-full h-[100px] px-5 '>
    <nav className="flex mb-10" aria-label="Breadcrumb">
<ol className="inline-flex items-center space-x-1 md:space-x-3 lg:space-x-10">
<li aria-current="page">
  <div className="flex items-center underline ">
    {/* <svg className="mx-1 w-1 h-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round" />
    </svg> */}
    <span className="ml-1 text-base font-bold text-indigo-600 md:ml-2 ">Today's Matches</span>
  </div>
</li>
<li className="inline-flex items-center">
  <a href="javascript:;" className="inline-flex items-center text-base font-bold text-gray-900 hover:text-indigo-800"> My Match </a>
</li>
<li>
  <div className="flex items-center">
    {/* <svg className="mx-1 w-1 h-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round" />
    </svg> */}
    <a href="javascript:;" className="ml-1 text-base font-bold text-gray-900 hover:text-indigo-800 md:ml-2">Recently Viewed</a>
  </div>
</li>
<li>
  <div className="flex items-center">
    {/* <svg className="mx-1 w-1 h-5" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.12561 1.13672L0.999943 18.8633" stroke="#E5E7EB" stroke-width="1.6" stroke-linecap="round" />
    </svg> */}
    <a href="javascript:;" className="ml-1 text-base font-bold text-gray-900 hover:text-indigo-800 md:ml-2">More Matches</a>
  </div>
</li>

</ol>
</nav>
      <h3 className='text-2xl font-bold'>4,564 Matches based on your <span className='text-red-500'>Prefrences</span> </h3>
    </div>
    <div className='w-full h-screen flex'>


<MatchesLeft />
<MatchesRight />

    </div>
     </>
  )
}

export default Matches