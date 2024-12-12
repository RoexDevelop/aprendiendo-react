import './App.css'
import { useState } from 'react'

export function App(){
    localStorage.setItem("cat","andrea")
    localStorage.setItem("dog","carlos")

    let [name, setName] = useState('')
    return(
        <>
            <h1>Local Storage</h1>
            <h3>Introduce tu nombre</h3>
            <input
                onChange={e => setName(e.target.value)}
                placeholder='Name'
            />
            <button onClick={SaveLocalStorage}>
                Añadir
            </button>
            <button>
                Eliminar
            </button>
            <br />
            <h2>Hola, {name}</h2>
        </>
    )
}

function SaveLocalStorage(name){
    console.log(name)
    localStorage.setItem("name",{name})

}
