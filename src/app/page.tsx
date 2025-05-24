import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
      <p>Hello we are on the home page</p>
       <Link href="/about" className='border border-red-500'>Go to about page</Link>
    </div>
  )
}

export default page
