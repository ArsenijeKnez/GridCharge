import React from 'react'
import './Possiblitiy.css'
import possibility from '../../Assets/app.png'

const Possiblitiy = () => {
    return (
        <div className='gridcharge__possibility section__padding'  id='possibility'>
            <div className='gridcharge__possibility-image'>
                <img src={possibility} alt='possibility' />
            </div>
            <div className='gridcharge__possibility-content '>
                <h1 className='gradient__text'>Explore the Endless Possibilities</h1>
                <p>Experience a smarter, more convenient way to manage your EV charging and travel needs. From finding nearby stations to planning your next adventure, we’ve got you covered.</p>
                <h4>Request Early Access to Start Your Journey</h4>
            </div>

        </div>
    )
}

export default Possiblitiy
