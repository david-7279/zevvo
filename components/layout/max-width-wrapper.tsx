import React, { ReactNode } from 'react'

interface Props {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper:React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`mx-auto w-full max-w-screen-2xl ${className}`}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper