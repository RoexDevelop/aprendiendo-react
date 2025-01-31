
import { useState, useEffect } from "react"
import "./App.css"

import { FaRegTrashAlt } from 'react-icons/fa';

let nextId = 0
export function App() {


    const [inputName, setInputName] = useState()
    const [listThings, setListThings] = useState([])

    {/** Función que añade una tarea en la lista de tareas */ }
    function addThingToList() {
        {/** Condición que controla si hau algo en el input */ }
        if (inputName) {
            setListThings([
                ...listThings, // --> OPERADOR DE PROPAGACIÓN, añade al final de la lista un elemento
                { id: nextId++, name: inputName }
            ])
        } else {
            alert("no hay nada")
        }
    }

    function deleteThingFromList(){

    }

    function showList(){
        return (<ul>
            {listThings.map(thing => (
                <li key={thing.id}>{thing.name} </li>
            ))}
        </ul>)
    }

    return (
        <>
            <h1>PROYECTO TO DO</h1>
            <h2>Introduce una tarea</h2>

            <input
                onChange={e => setInputName(e.target.value)}
            />
            <button onClick={addThingToList}>Añadir</button>
            <button>Eliminar</button>

            {/** Actualiza la lista para mostrarla dinámicamente */}
            {showList()}
            
        </>
    )
}