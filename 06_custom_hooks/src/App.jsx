import { useCart } from "./hooks/customHook";
import { products } from "./data/products";
import Card from "./components/Card";
import Cart from "./components/Cart";
import "./index.css";

export default function App() {
  // Use the custom cart hook
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-white">Shopping Cart</h2>
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeFromCart}
        total={total}
      />
    </div>
  );
}
