import React from 'react'
import Feed from './components/Feed'
import Share from './components/Share'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link className='pb-3 flex items-center border-b-4 border-iconBlue' href="/">For you</Link>
        <Link className="pb-3 flex items-center border-b-4 " href="/">Following</Link>
        <Link className='hidden pb-3 md:flex items-center border-b-4' href="/">React js</Link>
        <Link className='hidden pb-3 md:flex items-center border-b-4' href="/">Javascript</Link>
        <Link className='hidden pb-3 md:flex items-center border-b-4' href="/">Css</Link>
    </div><Share /><Feed />
    </div>
  )
}

export default HomePage
