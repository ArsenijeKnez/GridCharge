import React from 'react'
import './Blog.css'
import Article from '../../Components/Article/Article';
import {  charging, chargers1, chargers2 , road, map} from './import';



const Blog = () => {
    return (
        <div className='gridcharge__blog section__padding' id='blog'>
            <div className='gridcharge__blog-heading'>
                <h1 className='gradient__text'>A lot is happening,We are blogging about it.</h1>
            </div>
            <div className='gridcharge__blog-container'>
                <div className='gridcharge__blog-container_groupA'>
                    <Article imgurl={road} date={'Jan 6, 2025'} title={'Charge Smart, Drive Far: How GridCharge Simplifies Long-Distance Travel'} />
                </div>
                <div className='gridcharge__blog-container_groupB'>
                    <Article imgurl={charging} date={'Sep 26, 2024'} title={'Make reservations for charging spots.'} />
                    <Article imgurl={chargers1} date={'Sep 26, 2024'} title={'What to do if no station is available near enough?'} />
                    <Article imgurl={chargers2} date={'Sep 26, 2024'} title={'How do i reqister my charger?'} />
                    <Article imgurl={map} date={'Sep 26, 2024'} title={'Power at Your Fingertips: Exploring the Advanced Map Features of GridCharge.'} />
                </div>
            </div>
        </div>
    )
}

export default Blog
