export function TwitterFollowCard( {formatUserName, userName, name, isFollowing} ){
  const imageSrc = `https://unavatar.io/${userName}`;
  console.log(isFollowing)
  console.log("Hola")
  
 
    const addAt = (userName) => `@${userName}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src= {imageSrc}
                alt="El avatar de mirudev" />
                
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span> 
            </div>
            </header>
            <aside>
                <header>
                    <h1></h1>
                </header>
            </aside>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}