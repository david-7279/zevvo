import React, { ReactNode } from 'react'

interface Props {
  classname?: string;
  children: ReactNode
}

const CoreWrapper: React.FC<Props> = ({ classname, children }) => {
  return (
    <div className={`${classname} space-y-5`}>
      {children}
    </div>
  )
}

export default CoreWrapper