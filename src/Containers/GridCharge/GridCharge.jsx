import React from 'react'
import './GridCharge.css'
import { Feature } from '../../Components'


const GridCharge = () => {
    return (
        <div className='gridcharge__whatgridcharge section__margin' id='gridcharge'>
            <div className='gridcharge__whatgridcharge-feature'>
                <Feature title={'Why Choose GridCharge?'} text={'GridCharge makes EV charging simple and stress-free by providing a comprehensive map of charging stations, real-time availability, and a reservation system to secure your spot in advance. Add your vehicles for a personalized experience, track their location alongside nearby chargers, and get tailored suggestions based on your EV\'s needs. With up-to-date availability and intuitive design, GridCharge ensures you’re always ready to power your journey with ease.'} />
            </div>
            <div className='gridcharge__whatgridcharge-heading'>
                <h1 className='gradient__text'>Redefine convenience and control—unlock smarter ways to plan your EV journey.</h1>
                <p>Explore The Librarys</p>
            </div>
            <div className='gridcharge__whatgridcharge-container'>
                <Feature title={'Nearby Stations'} text={'Quickly locate charging stations near your current location with real-time availability updates.'} />
                <Feature  title={'Plan Your Trips'} text={'Easily map out your trips with charging stops along the way and estimated battery usage.'} />
                <Feature title={'Reserve Chargers'} text={'Book a charging slot ahead of time to avoid waiting and ensure a smooth journey.'} />
            </div>
        </div>
    )
}

export default GridCharge
