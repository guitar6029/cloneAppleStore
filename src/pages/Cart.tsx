import React from 'react';
import { useSelector } from 'react-redux';
import TitleComponent from "../components/TitleComponent";
import { getCartItems } from "../features/ShoppingCartSlice";
import { RootState } from '../store'; // Adjust the path to your store

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => getCartItems(state));
  document.title = "Shoping Cart";



  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-2 p-10">
        <TitleComponent title="YOUR CART" size="text-7xl" />
      </div>
      <div className="flex flex-col gap-4 p-10">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex flex-row justify-between p-4 border-b border-gray-300">
              <span className='text-white'>{item.name}</span>
              <span className='text-white'>Qty: {item.quantity}</span>
              <span className='text-white'>${item.price}</span>
            </div>
          ))
        ) : (
          <div className="flex justify-center p-10">
            <span className='text-white'>Your cart is empty.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
