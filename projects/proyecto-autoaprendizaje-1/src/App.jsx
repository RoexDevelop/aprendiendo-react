import './App.css' //Alinear elementos con flex (practicar)
import './data.js'
import { sculptureList } from './data.js';
import { useState } from 'react'; //Importar la variable de estado useState

//&& --> El operador lógico AND (&&) evalúa operandos de izquierda a derecha, 
//regresando inmediatamente el valor del primer operando falsy que encuentre; si todos los 
//valores son truthy, el valor del último operando es retornado.
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
}

const products = [
    { title: 'Col', id: 1 },
    { title: 'Ajo', id: 2 },
    { title: 'Manzana', id: 3 }
]

function Cat() {
    return(
        <img
            src="https://st2.depositphotos.com/1000877/5947/i/950/depositphotos_59478951-stock-photo-cute-little-red-kitten-sleeps.jpg"
            alt="Gatito Adorable"
        />
    );
}

function Mybutton (){
    return (
        <button>Soy un boton</button>
    );
}

function Loggin (){
    let content;
    let isLoggedIn = true;
    if (isLoggedIn) {
        content = "Yes, he is logged in";
    } else {
        content = "NO he isn't logged in"
    }

    return(
        <div>
            {content}
        </div>
    )
}

function ListaProductos(){
    const listItems = products.map(product => 
        <li key={ListaProductos.id}>
            {product.title}
        </li>
    )
    return( <ul>{listItems}</ul> )
}

function MyButton(){
    function handleClick(){
        alert('ME HICISTE CLICK!')
    }
    
    return(
        <button onClick={handleClick}>
            Hazme Click!
        </button>
    )
}

function Gallery(){
    //let index = 0;
    const [index, setIndex] = useState(0); // Añadir use state
    
    
    function handleClick(){
        (index >= 11)? (alert('No hay más artículos ')):(setIndex(index + 1));
        console.log('continued' + index)
    }
    function handleClickBack(){
        (index <= 0)? (alert('No hay más artículos ')):(setIndex(index - 1));
        
        console.log('backed' + index)
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClickBack}>
                Atras
            </button>
            <button onClick={handleClick}>
                Siguiente
            </button>
            <h2>
                <i>{sculpture.name}</i>
                por {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} de {sculptureList.length})
            </h3>
            <img 
                src={sculpture.url} 
                alt={sculpture.alt} 
            />
            <p>
                {sculpture.description}
            </p>
        </>
    )
}


export function App() { //Función principal
    let isLoggedIn = false;
    return(
        
        <main>
            <section>
                <h1>1. Definir el componente</h1>
                <h2>1.1 Importar y exportar componentes</h2>
                <h2>Gatitos</h2>
                <div className='imgGatitos'>
                    <Cat />
                    <Cat />
                    <Cat />
                </div>
                
            </section>
            <article>
                <h2>Prueba de lista (componentes para desarrollo) OL</h2>
                <ol>
                    <li>Componentes: UI building blocks</li>
                    <li>Definiendo componentes</li>
                    <li>Usando un componente</li>
                </ol>
                <h2>Prueba de lista UL</h2>
                <ul>
                    <li>First component DFI21</li>
                    <li>Second component KSIL76</li>
                    <li>Third component ÑQW304</li>
                </ul>
            </article>
            <h1>2. Agrega marcado</h1>
            <img src="https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/301391558_384142163864456_1986825690786013404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XxULUBGv4fwQ7kNvgGeX9kU&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=A4C0oigC_Vvly3R_xEoHjLT&oh=00_AYDCsVLjYz-1b_uokk-1yTUGZo3_PKjG39Oq_33z55798g&oe=67440998" alt="El pana Miguel" />;
            <h1>Crear y anidar componentes</h1>
            <div>
                <Mybutton />
            </div>
            <img 
                className= 'avatar'
                src={user.imageUrl} 
                alt={'Foto de ' + user.name} />
                <br />
            <h2>Renderizado condicional</h2>
            {<Loggin />}
            {/**Operdor ternario */}
            
            <div>
                {isLoggedIn ? 
                    (<h5>Yes, logged in</h5>)
                    :
                    (<h5>No, not logged in :(</h5>)
                }
            </div>
            <div>{isLoggedIn && TRUE}</div>
            <h2>Renderizado de listas (bucle FOR y funcion MAP())</h2>
            <ListaProductos />
            <h2>Responder a Eventos</h2>
            <MyButton />
            <h2>El estado(variable de estado)</h2>
            <p>los componentes deben «recordar» cosas: el campo de texto, la imagen actual, el carrito de compras.</p>
            <Gallery />
            <h2>USE STATE</h2>

            <h2>Actualizar la pantalla (useState)</h2>
            <h2>Local Storage</h2>
            
        </main>
    );
}