import { useEffect, useState } from "react"

export function App(){
    const [fact, setFact] = useState('lorem ipsum cat fact watever')

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])

    return(
        <h1>App de gatitos</h1>
    )
}