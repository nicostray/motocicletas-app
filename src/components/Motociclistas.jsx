import React, {useContext} from 'react'
import MotosContext from '../context/MotosContext'
import UserContext from '../context/UserContext';
import '../styles/motociclistas.css'

const Motociclistas = ({num}) => {
    const {actualizarMoto , listaDeMotos} = useContext(MotosContext);
    const {user} = useContext(UserContext);

    const actualizarElementos = () => {
        actualizarMoto(num, user)
    }

    return (
        <div className={`motociclista ${listaDeMotos.find(element=> element.moto === num) && `ocupado`}`} onClick={actualizarElementos}>
            <h4>Motocicleta {num}</h4>
            {listaDeMotos.find(element=> element.moto === num) ? <p>No Disponible</p> : <p>Disponible</p>}
        </div>
    )
}

export default Motociclistas
