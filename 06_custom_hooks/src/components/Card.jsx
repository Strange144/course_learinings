export default function Card({ product, addToCart }) {
    return (
        <div>
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>

            <button onClick={addToCart}>+ Add to cart</button>
        </div>
    )
}