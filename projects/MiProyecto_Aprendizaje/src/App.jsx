import './App.css'
import { useEffect, useState } from 'react'

export function App() {
    const [inputName, setInputName] = useState('')
    const keyName = 'name'
    const nameLocalStorage = localStorage.getItem(keyName)
    const [textConfirmation, setTextConfirmation] = useState("")
    const [userExist, setUserExist] = useState(false)
    
    {/** Hook que chequea si el texto de confirmación se activa para deshacerlo a los 3 segundos */}
    useEffect(() => {
        console.log("Ha cambiado el useEffect")
        if (textConfirmation.length) { {/** --> Si tiene texto es true. De lo contrario false  */}
            setTimeout(() => {
                console.log("Han pasado 3 segundos")
                setTextConfirmation("")
            }, 3000);
        }
    }, [textConfirmation])

    //COMPONENTE QUE AÑADE UN NOMBRE A LOCAL STORAGE
    function saveNameLocalStorage(keyName, value) {
        if (!value) {
            setTextConfirmation("Campo vacío")
            return setUserExist(false)
            
        } else {
            localStorage.setItem(keyName, value)
            setTextConfirmation("Usuario Añadido")
            return setUserExist(true)
        }
    }

    //COMPONENTE QUE ELIMINA UN NOMBRE DE LOCAL STORAGE
    function deleteNameLocalStorage() {
        if (localStorage.getItem("name") === null) {
            setTextConfirmation("No hay nada en local storage")
            return setUserExist(false)
        } else {
            localStorage.removeItem("name")
            setTextConfirmation("Se ha eliminado de local Storage")
            return setUserExist(true)
        }
    }

    return (
        <>
            <h1>Local Storage</h1>
            <h3>Introduce tu nombre</h3>
            <input
                onChange={e => setInputName(e.target.value)}
                placeholder='Name'
            />
            <button onClick={() => saveNameLocalStorage(keyName, inputName)}>
                Añadir
            </button>
            <button onClick={() => deleteNameLocalStorage()}>
                Eliminar
            </button>
            <br />
            <h2>Hola, {nameLocalStorage === null ? inputName : nameLocalStorage}</h2>

            {
            userExist ? 
                <h3 id='userTrue' className="userExistTrue">{`${textConfirmation}`}</h3>
                        : 
                <h3 className="userExistFalse">{`${textConfirmation}`}</h3>
            }

        </>
    )
}




