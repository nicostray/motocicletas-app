import React from 'react'
import '../styles/motociclistasContainer.css'
import Motociclistas from './Motociclistas'

const MotociclistasContainer = () => {

    return (
        <section className='motociclistas-container'>
            <Motociclistas num={1}/>
            <Motociclistas num={2}/>
            <Motociclistas num={3}/>
            <Motociclistas num={4}/>
            <Motociclistas num={5}/>
            <Motociclistas num={6}/>
            <Motociclistas num={7}/>
            <Motociclistas num={8}/>
        </section>
    )
}

export default MotociclistasContainer
