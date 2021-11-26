import React, {useState, useContext} from 'react'
import '../styles/login.css'
import imgUser from '../images/user.png'
import UserContext from '../context/UserContext'


const Login = () => {

    const {login} = useContext(UserContext)

    const [nombre, setNombre] = useState('')
   
    const handleInputChange = ({target}) => {
       setNombre(target.value);      
    }

    const enviarDatos = () => {
        nombre.trim().length===0 ? alert('Debe ingresar un nombre') : login(nombre)
        
    }


    return (
        <section className="login-page">
            <div className="login-container">
                <img className="login-container__img" src={imgUser} alt="imagen de usuario" />
                <input className="login-container__input" type='text' placeholder='Ingrese su nombre' name="nombre" onChange={handleInputChange} autoComplete="off"></input>
                <button className="login-container__btn" onClick={() => enviarDatos()} type="button">Entrar</button>
            </div>
        </section>
    )
}


export default Login;