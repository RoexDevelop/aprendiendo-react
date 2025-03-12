import "./App.css"

export function App(){
    return (
        
        <div className="flex flex-col text-white bg-gray-800 min-h-screen">

            {/**Barra de navegación */}
            <nav className="flex py-3">
                <div className="flex w-400 justify-between">
                    <ul className="flex ">
                        <a href=""><li className="w-10">LOGO</li></a>
                        <a href=""><li className="w-12 ml-2">Inicio</li></a>
                        <a href=""><li className="w-18">Películas</li></a>
                        <a href=""><li className="w-13">Series</li></a>
                        <a href=""><li className="w-14">Género</li></a>
                    </ul>
                    <div>
                        <input className="bg-amber-50 rounded" type="text" />
                        <button className="text-black bg-amber-50 rounded-4xl px-4">Login</button>
                    </div>
                </div>
            </nav>

            {/**Sección de películas  */}
            <main className="flex">
                <h2>Películas</h2>
            </main>

            {/**ASIDE */}
            <aside>
                
            </aside>

            {/**Footer */}
            <footer> 

            </footer>
        </div>
    )
}