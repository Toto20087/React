import { useState } from "react"

export function TwitterFollowCard ({formatUserName, userName, name}) {
    
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing ? "tw-follow-card-button-following" : "tw-follow-card-button"

    const handleClick = () => setIsFollowing(!isFollowing)

    return (    
    <article className = "tw-follow-card">
    <header className = "tw-follow-card-header">
        <img src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" className = "tw-follow-card-avatar" />
        <div className = "tw-follow-card-text">
            <strong> {name} </strong>
            <span> {formatUserName(userName)} </span>
        </div>
    </header>

    <aside className = {buttonClassName} onClick={handleClick}>
        <button>
            {text}
        </button>
    </aside>
</article>

)}

/* Tambien lo que podes hacer si es que no tenes como parametro el nombre, es lo siguiente: */
/* 
export function TwitterFollowCard ({children, formatUserName, userName, isFollowing}) {
    console.log(isFollowing)
    return (    
    <article className = "tw-follow-card">
    <header className = "tw-follow-card-header">
        <img src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" className = "tw-follow-card-avatar" />
        <div className = "tw-follow-card-text">
            <strong> {children} </strong>
            <span> {formatUserName(userName)} </span>
        </div>
    </header>

    <aside className = "tw-follow-card-button">
        <button>
            Seguir
        </button>
    </aside>
</article>

)} */