import React from 'react'

const ProductImg = ({data}) => {
  return (
    <>
    {data.map((item)=>
    <div key={item._id} className='one-pr-img'>
    <img src={item.image} alt={item.name} />
    </div>
        )}
    
    </>
  )
}

export default ProductImg