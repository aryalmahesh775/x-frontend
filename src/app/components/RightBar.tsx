import React from 'react'
import Search from './Search'
import PopularTag from './PopularTag'
import Recommendations from './Recommendations'
import Link from 'next/link'

const RightBar = () => {
  return (
    <div className='pt-4 flex flex-col gap-4 sticky top-0 h-max'>
      <Search />
      <PopularTag />
      <Recommendations />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms and Services</Link>
        <Link href="/">Privecy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Add Info</Link>
        <Link href="/">@C 2025 L Corp.</Link>
      </div>
    </div>
  )
}

export default RightBar
