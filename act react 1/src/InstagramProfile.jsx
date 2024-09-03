import './App.css'
import { useState } from 'react' 
export function  InstagramProfile ({userName = "unknown", name, initialisFollowing}) {
  
  const [itsFollowing, setItsFollowing] = useState(initialisFollowing)
  /* const state = useState(false)
  const itsFollowing = state[0]
  const setitsFollowing = state[1]*/
  const text = itsFollowing ? 'Siguiendo':'Seguir'
  const followButton = itsFollowing ? 'ig-buttons-following' : 'ig-buttons-F'
  const handleClic = () => {
    setItsFollowing(!itsFollowing)
  }
  
  
  return (
    <article className = 'ig'>
      <header className = 'ig-header'>
        <body className = 'ig-profile'>
          <div>
            <img className = 'ig-profile-body' alt="avatar" src={`https://unavatar.io/${userName}`}/>
          </div>
        </body>
        <div className = 'ig-info'>
          <span className = ''>{name}</span>
          <strong className = ''>@{userName}</strong>
        </div>
      </header>
      <aside>
        <button className = {followButton} onClick={handleClic}>
         <span className = 'ig-button-text'>{text}</span>
         <span className = 'ig-button-stopFollowing'>Dejar de seguir?</span>
        </button>
        <button className = 'ig-buttons-SM'>
          Enviar mensaje
        </button>
        <button className = 'ig-buttons-SM'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
         </svg>
        </button>
      
      </aside>
    </article>
  )
}


