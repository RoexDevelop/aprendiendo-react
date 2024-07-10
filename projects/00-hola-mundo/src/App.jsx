import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const addAt = (userName) => `@${userName}`

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            
        </section>
    )
}