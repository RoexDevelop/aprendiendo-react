import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const addAt = (userName) => `@${userName}`

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" initialIsFollowing ={true}>
                Miguel Angel Durán
            </TwitterFollowCard>

            {/* Comentario dentro del render (no es lo ideal)*/}

            <TwitterFollowCard userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            
        </section>
    )
}