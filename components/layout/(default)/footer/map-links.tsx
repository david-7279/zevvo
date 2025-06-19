import React from "react"
import Link from "next/link"

interface Props {
  link: string;
  label: string;
}

const MapLinks:React.FC<Props> = ({ link, label }) => {
  return (
    <Link href={link} className="group">
      <p className="relative text-sm text-muted-foreground transition-all duration-500
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
            group-hover:after:w-full"
      >
        {label}
      </p>
    </Link>
  )
}

export default MapLinks