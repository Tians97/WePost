import React from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux'
import WelcomePage from './WelcomePage'
import UserPage from './UserPage'



export default function Navbar() {
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;

    if(sessionUser){
        sessionLinks = (
            <>
                <UserPage user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <WelcomePage/>
            </>
        )

    }
    return (
        <>
            {sessionLinks}
        </>
    )
}
