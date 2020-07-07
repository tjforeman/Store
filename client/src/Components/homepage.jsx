import React from 'react'
import '../Styles/homepage.scss'

const Homepage = () => {
    return(
    <div className = 'homepage'>
        <div className = 'directory-menu'>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className='title'>HATS</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className='title'>Jackets</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
                
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className='title'>Sneakers</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
                
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className='title'>MENS</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className = 'content'>
                    <h1 className='title'>WOMANS</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Homepage