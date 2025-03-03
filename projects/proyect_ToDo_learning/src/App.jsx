
import { useState, useEffect } from "react"
import "./App.css"

import { FaRegTrashAlt } from 'react-icons/fa';

let nextId = 0
export function App() {

    const [isEditingCard, setIsEditingCard] = useState(false)

    const [inputName, setInputName] = useState()
    const [inputSaveName, setInputSaveName] = useState()
    const [listThings, setListThings] = useState([])
    //const [inputEditName, setinputEditName] = useState()
    const [checkId, setCheckId] = useState()
    const [idNuevoCambio, setNuevoCambio] = useState()


    useEffect(() => {
        
        //Cambio de diseño en elementos de editar         
        const newListOfThings = listThings.map(thing => {
            if (thing.id === checkId) {
                
                (thing.editingCard == false) ? (thing.editingCard = true) : (thing.editingCard = false)
            }
            return thing
        });
        setCheckId() //Limpiar el buffer del Use State
        
        setListThings(newListOfThings) //Asignar la nueva lista en mi lista primaria
        
        if (idNuevoCambio !== undefined) {
            console.log("testttttt --> ", {checkEditId: checkId, listThings, newListOfThings, idNuevoCambio})
            console.log("Dentro del proceso de cambiar de nombre un elemeto --> ", inputSaveName)
            const listSaveOfThings = listThings.map(thing => {
                if (thing.id === idNuevoCambio) {
                    console.log("nombre del input -->", inputSaveName)
                    thing.name = inputSaveName
                    thing.editingCard = false
                }
                return thing
            });
            console.log({listSaveOfThings})
            setListThings(listSaveOfThings)
            setNuevoCambio() //Limpiar el buffer del useState nuevoCambio

        }

    
    }, [checkId, idNuevoCambio])




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

    {/**function showList() {
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
    }**}


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
    }**/}


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
            {/**Mostrar por pantalla la lista dinámica**/}
            {listThings.map(thing => 
            
            (thing.editingCard) ? 
                (<div className="card">
                    <input
                        id={thing.id}
                        type="text"
                        defaultValue={thing.name}
                        onChange={e => setInputSaveName(e.target.value)}
                    />
                    <button
                        id={thing.id}
                        onClick={() => setNuevoCambio(thing.id)}>
                        Guardar
                    </button>
                    <button id={thing.id} onClick={() => setCheckId(thing.id)}>Canelar</button>
                </div>) :
                (<div className="card">
                    <p>{thing.name}</p>
                    <button
                        id={thing.id}
                        onClick={() => deleteThingFromList(thing.id)}>
                        Eliminar
                    </button>
                    <button id={thing.id} onClick={() => setCheckId(thing.id)}>Editar</button>
                </div>)
            )}
        </>
    )
}