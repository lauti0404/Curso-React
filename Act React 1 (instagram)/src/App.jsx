import {InstagramProfile} from './InstagramProfile.jsx'
import './App.css'
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        itsFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hades',
        itsFollowing: false
    }, 
    {
        userName: 'pheralb',
        name: 'Pablo Hades',
        itsFollowing: false
    }, 
]

export function App () {
    return(
        <section className = "App">
            {
                users.map (({userName, name, itsFollowing}) =>(
                   
                    <InstagramProfile
                        key={userName}
                        userName = {userName}
                        name = {name}
                        initialisFollowing = {itsFollowing} 
                    ></InstagramProfile>
                ))
            }

        </section>
    )
}