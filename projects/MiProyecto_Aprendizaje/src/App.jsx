import './App.css'
import { useState } from 'react'

export function App(){
    const [inputName, setInputName] = useState('')
    const keyName = 'name'
    const nameLocalStorage = localStorage.getItem(keyName)

    

    return(
        <>
            <h1>Local Storage</h1>
            <h3>Introduce tu nombre</h3>
            <input
                onChange={e => setInputName(e.target.value)}
                placeholder='Name'
            />
            <button onClick={() => SaveNameLocalStorage(keyName, inputName)}>
                Añadir
            </button>
            <button onClick={() => DeleteNameLocalStorage("name")}>
                Eliminar
            </button>
            <br />
            <h2>Hola, {(nameLocalStorage === null)? inputName: nameLocalStorage}</h2>
        </>
    )
}

//COMPONENTE QUE AÑADE UN NOMBRE A LOCAL STORAGE
function SaveNameLocalStorage(keyName, value){
    (!value)?alert("No hay nada escrito"):(localStorage.setItem(keyName, value), alert("Se ha añadido a local storage"))
}

//COMPONENTE QUE ELIMINA UN NOMBRE DE LOCAL STORAGE
function DeleteNameLocalStorage(keyName){
    (localStorage.getItem(keyName) === null)?alert("No hay nada en local storage"):(localStorage.removeItem(keyName), alert("Se ha eliminado de local storage"))
}