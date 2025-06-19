import React from "react"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react";

interface Props {
  link: string;
  label: string;
}

const MapLinks: React.FC<Props> = ({ link, label }) => {
  return (
    <Link href={link} className="group flex flex-row gap-1 items-center">
      <p className="relative text-sm text-muted-foreground transition-all duration-500
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
            group-hover:after:w-full"
      >
        {label}
      </p>
      <ArrowUpRightIcon size={14} />
    </Link>
  )
}

export default MapLinks