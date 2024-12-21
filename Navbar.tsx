import React from 'react';
import { ShoppingCart, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC<{ onCartClick: () => void }> = ({ onCartClick }) => {
  const { state } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Use a brown or beige color for the coffee icon */}
            <Coffee className="h-8 w-8" style={{ color: '#6f4f28' }} />
            <span className="ml-2 text-xl font-bold text-gray-900">BrewVerse</span>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-8 w-8" style={{ color: '#6f4f28' }} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
