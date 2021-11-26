import React from 'react'
import BarraTurnos from '../components/BarraTurnos'
import MotociclistasContainer from '../components/MotociclistasContainer'
import '../styles/motocicletaspage.css'

const MotocicletasPage = () => {
    return (
        <main className="main-motos">
            <div className="main-motos__texto">
                <h1>Motocicletas disponibles</h1>
                <p>Puede tomar cualquiera que esté en verde, pero si está en rojo es porque está ocupada</p>
            </div>
            <BarraTurnos />
            <MotociclistasContainer />
        </main>
    )
}

export default MotocicletasPage
