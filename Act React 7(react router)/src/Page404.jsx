import { Link } from "./Link";
import Enojo from "./assets/Enojo.jpg"
export default function Page404 (){
    return(
        <>
            <div>
                <h1>This is NOT fine</h1>
                <img src = {Enojo} alt= 'thats not fine'/>
            </div>
            <Link to = '/'>Volver a la Home</Link>
           
        </>
    )
}