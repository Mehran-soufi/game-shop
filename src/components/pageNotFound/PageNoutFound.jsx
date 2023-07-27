import React from 'react'
import notFound from '../../assest/page not found/pageNotFounf.jpg'
import { useNavigate } from 'react-router-dom'

const PageNoutFound = () => {
    const navigate = useNavigate();
  return (
    <div className='notFound'>
        <div className="notFound-img">
            <img src={notFound} alt="not Found 404" />
        </div>
        <div className="notFound-det">
            <h2>oops !</h2>
            <p>page was not found</p>
            <button onClick={()=>navigate('/')}>Go Back</button>
        </div>
    </div>
  )
}

export default PageNoutFound