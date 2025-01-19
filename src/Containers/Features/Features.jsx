import React from 'react'
import './Features.css'
import { Feature } from '../../Components'

const featuresData = [
    {
        title: 'Reserve Charging Stations',
        text: 'Plan ahead by reserving chargers at your desired station before you arrive.'
    },
    {
        title: 'Register and Manage Vehicles',
        text: 'Easily register your electric vehicles and manage their details in one convenient place.'
    },
    {
        title: 'Add and Manage Charging Stations',
        text: 'Register your own charging stations to make them visible to other users and track usage.'
    },
    {
        title: 'Interactive Charging Map',
        text: 'Locate nearby charging stations with an interactive map and get real-time availability updates.'
    },
    {
        title: 'Expense Calculation',
        text: 'Estimate your charging expenses based on station rates and your car’s battery needs.'
    },
    {
        title: 'Trip Planning Assistance',
        text: 'Plan road trips efficiently with charger stops along the way and range estimations.'
    }
];


const Features = () => {
    return (
        <div className='gridcharge__features section__padding' id="features">
            <div className='gridcharge__features-heading'>
                <h1 className='gradient__text'>Simplify Your Experience Today. Discover how easy it can be to manage your EV charging needs.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gridcharge__features-container'>
                {
                    featuresData.map((item, index) => (
                        <Feature key={index} title={item.title} text={item.text} />
                    ))
                }
            </div>
        </div>
    )
}

export default Features
