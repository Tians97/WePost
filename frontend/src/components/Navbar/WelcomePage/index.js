import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Welcome.css"
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';



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

                    <div>
                        <ul className="icons">
                            <li><a href="https://www.linkedin.com/in/tianshuxiao" target="_blank" style={{ textDecoration: 'none', color: "black" }}><LinkedInIcon /></a></li>
                            <li><a href="https://github.com/Tians97" target="_blank"  style={{ textDecoration: 'none', color: "black" }}><GitHubIcon /></a></li>
                            <li><a href="mailto:tx2@g.ucla.edu" target="_blank" style={{ textDecoration: 'none', color: "black" }}><EmailIcon /></a></li>
                        </ul>
                    </div>

                    <div className='navbar-right'>
                        <h4><LoginFormModal showLogin = {showLogin} setShowLogin = {setShowLogin} setShowSignup = {setShowSignup}/></h4>
                        <h4 className='get-start'><SignupFormModal showSignup= {showSignup} setShowSignup = {setShowSignup} setShowLogin = {setShowLogin}/></h4>
                    </div>
                </div>
            </header>
        </div>
    )
}
