import React from 'react'
import './Header.css'
import people from '../../Assets/email.png'
import logo from '../../Assets/charger.png'

const Header = () => {
    return (
        <div className="gridcharge__header section__padding" id="home">
            <div className="gridcharge__header-image">
                <img src={logo} alt='Charger' />
            </div>
            <div className="gridcharge__header-content">
                <h1 className="gradient__text">Welcome to GridCharge – Your Ultimate EV Charging Companion</h1>
                <p>Power up your journey with GridCharge, the app designed to make electric vehicle charging simple, fast, and stress-free. Whether you're planning a long trip or just need a quick recharge, GridCharge ensures you’re always in control.</p>

                <div className="gridcharge__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="gridcharge__header-content__people">
                    <img src={people} alt='People' />
                    <p>Get the latest news and updates about our app</p>
                </div>
            </div>

        </div>
    )
}

export default Header
