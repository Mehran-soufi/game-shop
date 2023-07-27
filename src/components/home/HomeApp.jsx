import React from 'react'

import app from '../../assest/mobile/mobile.png'
import logoApp from '../../assest/mobile/storeLogo.png'

const HomeApp = () => {
  return (
    <div className='app'>
        <div className="app-img">
            <img src={app} alt="application" />
        </div>
        <div className="app-det">
            <h2>download app<span>(soon...)</span></h2>
            <div className="app-link">
                <img src={logoApp} alt="store logo" />
            </div>
        </div>
    </div>
  )
}

export default HomeApp