import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
    <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
      <Link href='/'>
        <Image 
          src="/assets/images/logov.svg"
          alt="logo"
          width={60}
          height={38}
        />
      </Link>

      <p>2023 higaurav.com All Rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer