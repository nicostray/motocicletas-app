import React, { useContext } from 'react'
import MotosContext from '../context/MotosContext';
import '../styles/barraTurnos.css'

const BarraTurnos = () => {
    let tramosHorarios = [];
    let primerDigito=8;

        for (let i=1;i<=25;i++){
            if(i%2===0){
                tramosHorarios.push(primerDigito + ":30");
                primerDigito++;
            }else{
                tramosHorarios.push(primerDigito + ":00");
            }
        }
    
    const {motosDisponibles, resetMotos, numTurno, setNumTurno} = useContext(MotosContext);

    const sigTurno = () => {
        numTurno === 23 ?
        setNumTurno(0) :
        setNumTurno(numTurno+1)
        resetMotos();
    }

    const antTurno = () => {
        numTurno === 0 ?
        setNumTurno(23) :
        setNumTurno(numTurno-1)
        resetMotos();
    }



    return (
        <div className="main-barra">
            <div className="main-barra__turno">
                <button className="main-barra__btn" onClick={() => antTurno()}><i className="fas fa-chevron-left arrow" ></i></button>
                <h2 className="main-barra__turno">Turno: <span>{tramosHorarios[numTurno]} - {tramosHorarios[numTurno+1]}</span></h2>
                <button className="main-barra__btn" onClick={() => sigTurno()}><i className="fas fa-chevron-right arrow"></i></button>
            </div>

            <div className="main-barra__disponibles">
                <h2>Disponibles <span>{motosDisponibles}</span></h2>
            </div>
        </div>
    )
}

export default BarraTurnos
