import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const addAt = (userName) => `@${userName}`

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Durán"/>
            <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>    
        </section>
        
    )
}