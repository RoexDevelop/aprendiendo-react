import { useEffect, useState } from "react"
import "./App.css"
// https://cataas.com/cat
//ENDPOINT DE GATOS RANDOM --> https://api.chucknorris.io/jokes/random
const ENDPOINT = 'https://dog.ceo/api/breeds/image/random'
export function App(){
    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(data => setFact(data.message))
    }, [])
    return (
        
        <div className="flex flex-col text-white bg-gray-800 min-h-screen ">
            <p>{fact}</p>
            
            {/**Barra de navegación */}
            <nav className="flex flex-row justify-center py-3">
                <div className="flex w-400 justify-between">
                    <ul className="flex ">
                        <a href="" className="underline underline-offset-6"><li className="w-20">LOGO</li></a>
                        <a href="" className="underline underline-offset-6"><li className="w-12 ml-2">Inicio</li></a>
                        <a href="" className="underline underline-offset-6"><li className="w-18">Películas</li></a>
                        <a href="" className="underline underline-offset-6"><li className="w-13">Series</li></a>
                        <a href="" className="underline underline-offset-6"><li className="w-14">Género</li></a>
                    </ul>
                    <div>
                        <input className="bg-amber-50 rounded-xl text-black p-1.5" type="text" onChange={e => (e.target.value)}/>
                        <button className="text-black bg-amber-50 rounded-4xl px-4 p-1.5">Login</button>
                    </div>
                </div>
            </nav>

            <div className="flex flex-row justify-center">
                <div className="flex w-400 justify-between">
                    <main className="flex-2 border-2">
                        <h2>Películas</h2>
                        {/**Div que contiene películas (Grid) */}
                        <div className="grid grid-cols-3 grid-rows-3 gap-4">
                            <div className="bg-amber-200 border">
                                c1
                            </div>
                            <div className="bg-amber-600 border">
                                c2
                            </div>
                            <div className="bg-amber-900 border">
                                c3
                            </div>

                            <div className="bg-blue-300 border">
                                a1
                            </div>
                            <div className="bg-blue-500 border">
                                a2
                            </div>
                            <div className="bg-blue-800 border">
                                a3
                            </div>

                            <div className="bg-fuchsia-200 border">
                                b1
                            </div>
                            <div className="bg-fuchsia-600 border">
                                b2
                            </div>
                            <div className="bg-fuchsia-800 border">
                                b3
                            </div>
                        </div>
                        <h2>Series</h2>
                    </main>

                    {/**ASIDE */}
                    <aside className="flex-1 flex-col border-2">
                        <h2>Más vistas</h2>
                        <h2>Pelis Recomendadas</h2>
                    </aside>
                </div>
            </div>
            {/**Div cuerpo (contiene main y aside) */}
            
            {/**Sección de películas  */}
            

            {/**Footer */}
            <footer> 

            </footer>
        </div>
    )
}