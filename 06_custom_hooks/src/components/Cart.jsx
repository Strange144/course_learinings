import CartItem from "./CartItem"

export default function Cart({ cart, updateQuantity, removeItem, total }) {
    if (cart.length === 0) {
        return <div>there is no products in the cart</div>
    }

    return (
        <div>
            <h2>your items</h2>

            {
                cart.map((item) => (
                    <CartItem items={item} updateQuantity={updateQuantity}
                        removeItem={removeItem} />
                ))
            }

            <div>
                <h3>Total : {typeof total === "string" ? total : total.toFixed(2)}</h3>
            </div>
        </div>
    )
}