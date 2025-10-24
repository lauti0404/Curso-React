import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
    const {cart} = useCart()
    const {filter} = useFilters()
    return(
        <footer className = 'footer'>
            {
                JSON.stringify(filter, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }
        </footer>
    )
}