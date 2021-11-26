import React, { createContext, useState } from 'react'

const MotosContext = createContext();

const MotosProvider = ( {children} ) => {

    const [motosDisponibles, setMotosDisponibles] = useState(8);
    const [listaDeMotos, setListaDeMotos] = useState([{}]);
    const [numTurno, setNumTurno] = useState(0);

    const actualizarMoto = (numDeMoto, usuario) => {
        let busqueda = listaDeMotos.find(element => element.moto===numDeMoto); //Revisa si hay un objeto que contenga el número de moto
        if (busqueda){
            if(busqueda.user === usuario){ //Si el usuario que guardó esa moto es igual al usuario que dio click:
                let nuevoArray = listaDeMotos.filter(element => element.moto !== numDeMoto) //guardamos en un nuevo array la lista, pero sin esa moto
                setListaDeMotos(nuevoArray)
                setMotosDisponibles(motosDisponibles+1)

            }else{
                alert("Solo puedes modificar motociclistas tomados por ti")
            }
        } else { //como no lo contiene, simplemente se agrega al array
            setListaDeMotos([...listaDeMotos, {moto : numDeMoto, user : usuario}]); //agrega si el numero de moto no está tomado
            setMotosDisponibles(motosDisponibles-1)
    
        }
    }

    const resetMotos = () => {
        setMotosDisponibles(8);
        setListaDeMotos([{}])
    }


    const data = {actualizarMoto, motosDisponibles, resetMotos, listaDeMotos, numTurno, setNumTurno}

    return (
        <MotosContext.Provider value={data}>
            {children}
        </MotosContext.Provider>
    )
}

export default MotosContext
export {MotosProvider}
