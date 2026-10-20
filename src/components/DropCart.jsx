import Cart from './cart'

function DropCart({cartItems, plusQte, minusQte, total}) {
    
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