import React, {useContext} from 'react'
import UserContext from '../context/UserContext';
import userFoto from '../images/user.png';
import '../styles/usuario.css';

const Usuario = () => {
    const {logout, user} = useContext(UserContext)

    const salir = () => {
        logout()
    }

    return (
        <div>
                <div className="nav__user" onClick={() => salir()}>
                <img className="nav__user-foto" src={userFoto} alt="" />
                <p className="nav__user-name">{user}</p>
                <i className="fas fa-sign-out-alt"></i>
            </div>
        </div>
    )
}

export default Usuario
