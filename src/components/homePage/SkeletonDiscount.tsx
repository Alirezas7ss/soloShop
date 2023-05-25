import React from 'react'
import SkeletonCard from '../ui/SkeletonCard'

function SkeletonDiscount() {
  return (
    <div>
        {[...new Array(4)].map((_ , index) => (
          <div key={index}>
                <SkeletonCard  />
             </div>
        ))}
    </div>
  )
}

export default SkeletonDiscount