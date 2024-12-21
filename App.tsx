import React, { useState } from 'react';
import { Navbar } from './components/Navbar'; // Adjust if needed
import { ProductCard } from './components/ProductCard'; // Ensure path is correct
import { Cart } from './components/Cart'; // Ensure path is correct
import { CartProvider } from './context/CartContext'; // Ensure path is correct
import { products } from './data/products'; // Adjust if needed

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar onCartClick={() => setIsCartOpen(true)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h1>

          <div className="w-full h-72 object-cover">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
