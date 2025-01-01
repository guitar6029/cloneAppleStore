import React from 'react';
import { useSelector } from 'react-redux';
import TitleComponent from "../components/TitleComponent";
import { getCartItems } from "../features/ShoppingCartSlice";
import { RootState } from '../store';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { themeColors } from '../utils/color/colorUtil';
import useCartItem from "../hooks/useCartItem";
import Button from '../components/buttons/Button';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => getCartItems(state));
  document.title = "Shopping Cart";

  const { handleAction, clearCart } = useCartItem();

  const priceStyle: React.CSSProperties = {
    color: themeColors.importantText
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-2 p-10">
        <TitleComponent title="YOUR CART" size="text-7xl" />
      </div>
      <div className="flex flex-col gap-4 p-10">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-[#4d4d4f] hover:bg-[#5B5B5D] transition duration-300 ease-out">
              <span className="text-white self-center">{item.name}</span>
              <div className="flex flex-row items-center justify-center gap-2">
                <CiCircleMinus onClick={() => handleAction('decreaseQuantity', item)} size={30} className="cursor-pointer text-white" />
                <span className="text-white">{item.quantity}</span>
                <CiCirclePlus onClick={() => handleAction('increaseQuantity', item)} size={30} className="cursor-pointer text-white" />
              </div>
              <span style={priceStyle} className="self-center justify-self-end font-semibold">${item.price}</span>
            </div>
          ))

        ) : (
          <div className="flex justify-center p-10">
            <span className="text-white text-base xl:text-2xl lg:text-xl md:text-lg">
              Your cart is empty. Go find something to buy
            </span>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="flex flex-row">
            <Button text="CLEAR CART" typeBtn="primary" onClick={() => clearCart(cartItems)} size="md" />
          </div>

        )}
      </div>
    </div>
  );
};

export default Cart;
