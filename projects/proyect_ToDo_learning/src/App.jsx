
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
            console.log("testttttt --> ", {checkEditId: checkId, listThings, newListOfThings, idNuevoCambio, inputSaveName})
            const listSaveOfThings = listThings.map(thing => {
                if (thing.id === idNuevoCambio) {
                    thing.name = inputSaveName
                    thing.editingCard = false
                }
                return thing
            });
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
        
            <h1 class="text-2xl font-bold underline">PROYECTO TO DO</h1>
            <h2 class="font-bold">Introduce una tarea</h2>

            
            <input
            onChange={e => setInputName(e.target.value)} 
            class=" bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
            
        </input>
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

            <h2 class="text-2xl text-pink-500">Tailwind testing</h2>
            <div class="flex bg-white text-black h-8">
                <div class="w-14 flex-none bg-cyan-500 flex justify-center algin-center border-2 border-none rounded-sm">01</div>
                <div class="w-64 flex-1 bg-cyan-600 flex justify-center border-2 border-none rounded-sm">02</div>
                <div class="w-32 flex 1 bg-cyan-700 flex justify-center border-2 border-none rounded-sm">03</div>
            </div>
            <div class="flex">

            </div>
        </>
    )
}