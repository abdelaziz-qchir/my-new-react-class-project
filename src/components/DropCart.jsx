import { useContext } from 'react';
import Cart from './cart'
import { AppContext } from './useContext';

function DropCart() {
    const {cartItems, total, plusQte, minusQte} = useContext(AppContext)
    
    return (
        <div className="cart-drop">
            <h2>Shopping Cart</h2>
            <div className="cart-total">
                <h3>Montant Total :</h3>
                <p>{total} $</p>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <Cart
                        plusQte={plusQte}
                        minusQte={minusQte}
                        key={item.id ?? index}
                        item={item}
                    />
                ))
            ) : (
                <p className="empty-cart">
                    Your cart is empty
                </p>
            )}
        </div>
    )
}
export default DropCart;