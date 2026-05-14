export default function CartItem({ items, updateQuantity, removeItem }) {
    return (
        <div>
            <h2>{items.name}</h2>
            <h3>{items.price}</h3>
            <div><button onClick={() => updateQuantity(items.id, items.quantity - 1)} >-</button>
                <h3>{items.quantity}</h3>
                <button onClick={() => updateQuantity(items.id, items.quantity + 1)} >+</button></div>
            <div><button onClick={() => removeItem(items.id)}>remove</button></div>
        </div>
    )
}