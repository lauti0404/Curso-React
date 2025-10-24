import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon} from "./icons";
import { useCart } from '../hooks/useCart';
function CartItem ({totalPrice, thumbnail, price, title, quantity, addToCart}){
    return ( 
        <li>
            <img src={thumbnail} alt = {title}/>
            <div>
                <strong>{title}</strong> - ${quantity==1 ?price:price*quantity}
            </div>
            <footer>
                <small>
                    Qty:{quantity}
                </small>
                <button onClick = {addToCart}>+</button>
            </footer>
        </li>
    )
}
export function Cart (){
    const cartChackBoxId = useId()
    const {cart, clearCart, addToCart} = useCart()
    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
return (
   
    <>
        <label className = 'cart-button' htmlFor = {cartChackBoxId}>
            <CartIcon/>
        </label>
        <input id = {cartChackBoxId} type = 'checkbox' hidden/>
        <aside className = 'cart'>
            <ul>
               {cart.map(product =>(
                    <CartItem 
                        key={product.id}
                        addToCart = {() => addToCart(product)}
                        {...product}
                    />
               ))}
            </ul>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
        </aside>
    </>
)
}