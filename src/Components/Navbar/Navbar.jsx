import React, { Fragment, useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../Assets/logo.svg'

const Menu = () => (
    <Fragment >
        <p><a href='#home'>Home</a></p>
        <p><a href='#gridcharge'>What is GridCharge?</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#possibility'>GridCharge</a></p>
        <p><a href='#blog'>Library</a></p>
    </Fragment>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='gridcharge__navbar'>
            <div className='gridcharge__navbar-links'>
                <div className='gridcharge__navbar-links_logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='gridcharge__navbar-links_container' ><Menu /></div>
            </div>
            <div className='gridcharge__navbar-sign'>
                <p>Sign in</p>
                <button type='button' className=''>Sign up</button>
            </div>
            <div className='gridcharge__navbar-menu' style={{ transition: 'all 0.3s ease' }}>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu &&
                    <div className='gridcharge__navbar-menu_container' >
                        <div className='gridcharge__navbar-menu_container' >
                            <Menu />
                            <div className='gridcharge__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button' className=''>Sign up</button>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>

    )
}

export default Navbar
