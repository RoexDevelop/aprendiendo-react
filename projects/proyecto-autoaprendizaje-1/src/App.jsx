import './App.css' //Alinear elementos con flex (practicar)

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
}

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

export function App() { //Función principal
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
        </main>
    );
}