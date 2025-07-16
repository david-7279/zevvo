import React from "react"
import Image from "next/image"

interface Props {
  src: string
  alt: string
  width: number
  height: number
}

const DataTableColumnRowImage: React.FC<Props> = ({ src, alt, width, height }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  )
}

export default DataTableColumnRowImage