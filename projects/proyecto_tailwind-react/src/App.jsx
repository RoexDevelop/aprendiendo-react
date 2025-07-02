import { useEffect, useState } from "react"
import "./App.css"
// https://cataas.com/cat
//ENDPOINT DE GATOS RANDOM --> https://api.chucknorris.io/jokes/random
const ENDPOINT = 'https://dog.ceo/api/breeds/image/random'
export function App(){

    const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const fetchPromises = [];

        for (let i = 0; i < 10; i++) {
          const promise = fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => {
              if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
              return res.json();
            })
            .then(data => data.message) // la imagen viene en el campo 'message'
            .catch(error => {
              console.error(`Error en fetch ${i}:`, error);
              return null;
            });
          fetchPromises.push(promise);
        }

        const resultados = await Promise.all(fetchPromises);
        setImagenes(resultados);
      } catch (e) {
        console.error("Error general:", e);
        setError(e.message);
      } finally {
        setCargando(false);
      }
    };

    fetchDogs();
  }, []); // se ejecuta una sola vez al montar el componente
  if (cargando) return <p>Cargando imágenes de perritos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;
    return (
        
        
        <div className="flex flex-col text-white bg-gray-800 min-h-screen ">
            
            <p>{console.log(imagenes)}</p>
            <img src={imagenes[1]}/>
            <img src={imagenes[2]}/>
            
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
                                <img src={imagenes[1]}/>
                            </div>
                            <div className="bg-amber-600 border">
                                <img src={imagenes[2]}/>
                            </div>
                            <div className="bg-amber-900 border">
                                <img src={imagenes[3]}/>
                            </div>

                            <div className="bg-blue-300 border">
                                <img src={imagenes[4]}/>
                            </div>
                            <div className="bg-blue-500 border">
                                <img src={imagenes[5]}/>
                            </div>
                            <div className="bg-blue-800 border">
                                <img src={imagenes[6]}/>
                            </div>

                            <div className="bg-fuchsia-200 border">
                                <img src={imagenes[7]}/>
                            </div>
                            <div className="bg-fuchsia-600 border">
                                <img src={imagenes[8]}/>
                            </div>
                            <div className="bg-fuchsia-800 border">
                                <img src={imagenes[9]}/>
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