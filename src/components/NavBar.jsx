import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import logo from '../images/logo.png'
import '../styles/navbar.css'
import Usuario from './Usuario'


const NavBar = () => {
    const {user} = useContext(UserContext)
    return (
        <nav className="nav">
            <img className="nav__img" src={logo} alt="logo" />
            {user !== null ? <Usuario /> : <div></div>}
        </nav>
    )
}

export default NavBar
