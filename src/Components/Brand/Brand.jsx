import React from 'react'
import './Brand.css'
import { android, apple, google, dropbox, paypal } from './import'

const Brand = () => {
    return (
        <div className='gridcharge__brand'>
            <div><img src={google} alt='google' /></div>
            <div><img src={android} alt='android' /></div>
            <div><img src={apple} alt='apple' /></div>
            <div><img src={paypal} alt='paypal' /></div>
            <div><img src={dropbox} alt='dropbox' /></div>
        </div>
    )
}

export default Brand
