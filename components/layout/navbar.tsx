import { Path } from '@/lib/paths'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="">
      <Link href={Path.root}>
        Business Hub
      </Link>
    </nav>
  )
}

export default Navbar