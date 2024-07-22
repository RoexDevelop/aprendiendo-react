export function TwitterFollowCard( {children, userName = 'unknown', isFollowing} ){
  const imageSrc = `https://unavatar.io/${userName}`;
  console.log(isFollowing)
  console.log("Hola")
  
 
    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src= {imageSrc}
                alt="El avatar de mirudev" />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span> 
            </div>
            </header>
            <aside>
                <button className= {buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}