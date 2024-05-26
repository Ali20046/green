import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const HeaderBar = () => {

    const [classNameNavbar, setClassNameNavbar] = useState('navbar')
    const [classNameI, setClassNameI] = useState('bi bi-list mobile-nav-toggle')

    const toggle = _ => {
        if (classNameNavbar === 'navbar' && classNameI === 'bi bi-list mobile-nav-toggle') {
            setClassNameNavbar('navbar navbar-mobile')
            setClassNameI('bi bi-x mobile-nav-toggle')
        }
        if (classNameNavbar === 'navbar navbar-mobile' && classNameI === 'bi bi-x mobile-nav-toggle') {
            setClassNameNavbar('navbar')
            setClassNameI('bi bi-list mobile-nav-toggle')
        }
    }
    
    const toggleNavLink = _ => {
        if (classNameNavbar === 'navbar navbar-mobile' && classNameI === 'bi bi-x mobile-nav-toggle') {
            setClassNameNavbar('navbar')
            setClassNameI('bi bi-list mobile-nav-toggle')
        }
    }

    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="/">Green</a></h1>
                <nav id="navbar" className={classNameNavbar}>
                    <ul>
                        <li><NavLink onClick={toggleNavLink} className="nav-link scrollto" to="/">Home</NavLink></li>
                        <li><NavLink onClick={toggleNavLink} className="nav-link scrollto" to="/about">About</NavLink></li>
                        <li><NavLink onClick={toggleNavLink} className="nav-link scrollto" to="/services">Services</NavLink></li>
                        <li><NavLink onClick={toggleNavLink} className="nav-link scrollto" to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink onClick={toggleNavLink} className="nav-link scrollto" to="/team">Team</NavLink></li>
                        <li><NavLink onClick={toggleNavLink} className="nav-link scrollto" to="/contact">Contact</NavLink></li>
                        <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                    </ul>
                    <i onClick={toggle} className={classNameI}></i>
                </nav>
            </div>
        </header>
    )
}

export default HeaderBar