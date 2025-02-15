
import { useState, useEffect } from "react"
import "./App.css"

import { FaRegTrashAlt } from 'react-icons/fa';

let nextId = 0
export function App() {

    const [isEditingCard, setIsEditingCard] = useState(false)

    const [inputName, setInputName] = useState()
    const [listThings, setListThings] = useState([])
    const [inputEditName, setinputEditName] = useState()

    useEffect(() => {
        setIsEditingCard(true)
    }, [listThings])



    {/** Función que añade una tarea en la lista de tareas */ }
    function addThingToList() {
        {/** Condición que controla si hau algo en el input */ }
        if (inputName) {
            setListThings([
                ...listThings, // --> OPERADOR DE PROPAGACIÓN, añade al final de la lista un elemento
                { id: nextId++, name: inputName, editingCard: false}
            ])
        } else {
            alert("no hay nada")
        }
    }

    {/**Elimina un elemento de la lista */ }
    function deleteThingFromList(idBtn) {
        setListThings(listThings.filter(a => {
            return a.id !== idBtn
        }
        ))

    }

    function showList() {
        listThings.map(thing => 
            
            {thing.editingCard ? 
                (<div className="card">
                    <p id={thing.id}>{thing.name}</p>
                    <button
                        id={thing.id}
                        onClick={() => deleteThingFromList(thing.id)}>
                        Eliminar
                    </button>
                    <button id={thing.id} onClick={() => setIsEditingCard(true)}>Editar</button>
                </div>) :
                (<div className="card">
                    <p id={thing.id}>{thing.name}</p>
                    <button
                        id={thing.id}
                        onClick={() => deleteThingFromList(thing.id)}>
                        Eliminar
                    </button>
                    <button id={thing.id} onClick={() => setIsEditingCard(true)}>Editar</button>
                </div>)}

            
        )
    }

    {/**function showList() {
        
        return (
            <div >
                {listThings.map(thing => (
                    
                    <div className="card">
                        <p id={thing.id}>{thing.name}</p>
                        <button
                            id={thing.id}
                            onClick={() => deleteThingFromList(thing.id)}>
                            Eliminar
                        </button>
                        <button id={thing.id} onClick={() => setIsEditingCard(true)}>Editar</button>
                    </div>
                ))}
            </div>)
    }**/}

    function showListEdit() {
        return (<div >
            {listThings.map(thing => (
                <div className="card">
                    <input
                        id={thing.id}
                        onChange={e => setInputName(e.target.value)}
                        placeholder={thing.name}
                    />
                    <button id={thing.id}>
                        Guardar
                    </button>
                    <button id={thing.id} onClick={() => setIsEditingCard(false)}>Cancelar</button>
                </div>
            ))}
        </div>)
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
            <br />
            {console.log(listThings)}
            {/**isEditingCard ? showListEdit() : showList()**/}
            {listThings.map(thing => 
            
            thing.editingCard ? 
                (<div className="card">
                    <p id={thing.id}>{thing.name}</p>
                    <button
                        id={thing.id}
                        onClick={() => deleteThingFromList(thing.id)}>
                        Eliminar
                    </button>
                    <button id={thing.id} onClick={() => setIsEditingCard(true)}>Editar</button>
                </div>) :
                (<div className="card">
                    <p id={thing.id}>{thing.name}</p>
                    <button
                        id={thing.id}
                        onClick={() => deleteThingFromList(thing.id)}>
                        Eliminar
                    </button>
                    <button id={thing.id} onClick={() => setIsEditingCard(true)}>Editar</button>
                </div>)
                

            
        )}
            
        </>
    )
}