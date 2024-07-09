import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const addAt = (userName) => `@${userName}`

export function App () {
    //const format = (userName) => `@$(userName)`

    const formattedUserName = (<span>@{userName}</span>)

    return (
        <section className="App">
            <TwitterFollowCard
            formattedUserName={format}
            isFollowing 
            userName="midudev" 
            name="Miguel Angel Durán"/>

            <TwitterFollowCard
            formattedUserName={format}
            isFollowing={false} 
            userName="pheralb"
            name="Pablo Hernandez"/>

            <TwitterFollowCard
            formattedUserName={format}
            userName="elonmusk"
            name="Elon Musk"/>  
        </section>
    )
}