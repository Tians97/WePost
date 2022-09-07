import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Welcome.css"
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'


export default function WelcomePage() {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    return (
        <div className='welcome'>
            <header>
                <div className='navbar'>
                    <div className='navbar-left'>
                        <Link style={{ textDecoration: 'none', color: "black" }} to="/">
                            <h2><img src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png" /> WePost</h2>
                        </Link>
                    </div>

                    <div className='navbar-right'>
                        <h4>Our story</h4>
                        <h4>Membership</h4>
                        <h4>Write</h4>
                        <h4><LoginFormModal showLogin = {showLogin} setShowLogin = {setShowLogin} setShowSignup = {setShowSignup}/></h4>
                        <h4 className='get-start'><SignupFormModal showSignup= {showSignup} setShowSignup = {setShowSignup} setShowLogin = {setShowLogin}/></h4>
                    </div>
                </div>
            </header>

            <div className='second-header'>
                <div className='second-header-left'>
                    <h1 className='second-header-title'>
                        Stay curious.
                    </h1>
                    <h2 className='second-header-content'>
                        Discover stories, thinking, and expertise from writers on any topic.
                    </h2>
                </div>

                <img className='W' src='https://i.postimg.cc/sDxkgs9J/Untitled-design-1.png'/>

            </div>
        </div>
    )
}
