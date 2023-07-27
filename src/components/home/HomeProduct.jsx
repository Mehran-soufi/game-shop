import React from 'react'
import hero from '../../assest/hero/hero2.webp'
import { useNavigate } from 'react-router-dom'

const HomeProduct = () => {
  const navigate = useNavigate();
  return (
    <div className='home-product'>
        <img src={hero} alt="game shop" />
        <div className="product-det">
            <h2>All Products</h2>
            <button onClick={()=>navigate('/products')}>view</button>
        </div>
    </div>
  )
}

export default HomeProduct