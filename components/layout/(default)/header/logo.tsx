import { Path } from '@/lib/paths'
import { PackageIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex w-full justify-between lg:w-auto">
      <Link href={Path.root} className="flex flex-row gap-2 items-center">
        <PackageIcon />
        <p className="text-lg text-foreground/70">Zevvo</p>
      </Link>
    </div>
  )
}

export default Logo