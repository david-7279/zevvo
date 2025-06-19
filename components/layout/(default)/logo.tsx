import { Path } from '@/lib/paths'
import { PackageIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={Path.root} className="flex flex-row gap-2 items-center">
      <PackageIcon />
      <p className="text-lg text-foreground/70">Business Hub</p>
    </Link>
  )
}

export default Logo