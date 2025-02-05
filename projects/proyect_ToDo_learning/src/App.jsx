
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
            setInputName("")
        } else {
            alert("no hay nada")
        }
    }

    {/**Elimina un elemento de la lista */}
    function deleteThingFromList(idBtn) {
        setListThings(listThings.filter(a => {
            console.log(a)
            return a.id !== idBtn
        }
        ))
        
    }

    function showList() {
        return(<div >
            {listThings.map(thing => (
                <div className="card">
                    <p id={thing.id}>{thing.name}</p>
                    <button 
                        id={thing.id}
                        onClick={() => deleteThingFromList(thing.id)}>
                            Eliminar
                    </button>
                    <button id={thing.id}>Editar</button>
                </div>
                
            ))}
        </div>)
    }

    function showListEdit(){

    }

    return (
        <>
            <h1>PROYECTO TO DO</h1>
            <h2>Introduce una tarea</h2>

            <input
                onChange={e => setInputName(e.target.value)}
            />
            <button onClick={addThingToList}>Añadir</button>

            {/** Actualiza la lista para mostrarla dinámicamente */}
            {showList()}

        </>
    )
}