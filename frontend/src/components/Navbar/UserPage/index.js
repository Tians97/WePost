import React from 'react'
import { NavLink } from 'react-router-dom'
import "./UserPage.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ProfileButton from '../ProfileButton.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';



export default function UserPage({user}) {
    return (
        <>
            <div className='nav-bar'>
                <div className='nav-logo'>
                    <NavLink to="">
                        <img src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png" />
                    </NavLink>
                </div>
                <div className='navb-bar-content'>
                    <div className='nav-icon'>
                        <div className='icon'>
                            <NavLink style={{color:"black"}} to="/">
                                <HomeOutlinedIcon/>
                            </NavLink>
                        </div>
                        <div className='icon'>
                            <NavLink style={{ color: "black" }} to={`/users/${user.id}/bookmarks`}>
                                <BookmarksOutlinedIcon />
                            </NavLink>
                        </div>
                        <div className='icon'>
                            <NavLink style={{ color: "black" }} to={`/users/${user.id}/stories`}>
                                <DescriptionOutlinedIcon />
                            </NavLink>
                        </div>
                    </div>
                    <div className='nav-post'>
                        <NavLink style={{ color: "black" }} to="/stories/new_story">
                            <CreateOutlinedIcon />
                        </NavLink>
                    </div>
                    <div className='nav-link'>
                        <div className='icon'>
                            <a href="https://www.linkedin.com/in/tianshuxiao" target="_blank" style={{ textDecoration: 'none', color: "black" }}><LinkedInIcon /></a>
                        </div>
                        <div className='icon'>
                            <a href="https://github.com/Tians97" target="_blank"  style={{ textDecoration: 'none', color: "black" }}><GitHubIcon /></a>
                        </div>
                        <div className='icon'>
                            <a href="mailto:tx2@g.ucla.edu" target="_blank"  style={{ textDecoration: 'none', color: "black" }}><EmailIcon /></a>
                        </div>
                    </div>
                </div>
                <div className='profile-button-container'>
                    <div className='profile-button'>
                        <ProfileButton user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
