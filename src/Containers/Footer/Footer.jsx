import React from 'react'
import './Footer.css'
import logo from './../../Assets/logo.svg'

const Footer = () => {
    return (
        <div className='gridcharge__footer section__padding'>
            <div className='gridcharge__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
            </div>
            <div className='gridcharge__footer-btn'>
                <p>Request Early Access</p>
            </div>
            <div className='gridcharge__footer-links'>
                <div className='gridcharge__footer-links_logo'>
                    <img src={logo} alt='Logo' />
                    <p>Trg Nikole Pašića 31, Beograd, All Rights Reserved</p>
                </div>
                <div className='gridcharge__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gridcharge__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gridcharge__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Trg Nikole Pašića 31, Beograd</p>
                    <p>+381 60 4789 084</p>
                    <p>info@payme.net</p>
                </div>
            </div>

            <div className="gridcharge__footer-copyright">
                <p>@2024 GridCharge. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
