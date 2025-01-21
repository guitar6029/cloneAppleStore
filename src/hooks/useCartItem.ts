import { useDispatch } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity, clearShoppingCart, removeFromShoppingCart } from "../features/ShoppingCartSlice";
import { updateQuantity, resetQuantity } from "../features/DepartmentSlice";
import { handleFavorites, clearFavoriteItems } from "../features/FavoritesSlice";

const useCartItem = () => {
    const dispatch = useDispatch();

    const clearCart = () => {
        dispatch(clearShoppingCart());
        dispatch(resetQuantity());
    }

    const clearFavorites = () => {
        dispatch(clearFavoriteItems())
    }

    const removeItemFromCart = (id: number) => {
        dispatch(removeFromShoppingCart(id));
    }

    const handleAction = (type: string, item: any) => {
        if (type === 'increaseQuantity') {
            dispatch(increaseQuantity({
                id: item.id,
                quantity: item.quantity
            }));
        } else if (type === 'decreaseQuantity') {
            dispatch(decreaseQuantity({
                id: item.id,
                quantity: item.quantity
            }));
        } else if (type === 'heart') {
            dispatch(handleFavorites(item));
        } else if (type === 'cart') {
            dispatch(addToCart({
                id: item.id,
                name: item.name,
                price: item.price
            }));
            dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
            }));
        } else if (type === 'removeItem') {
            dispatch(removeFromShoppingCart(item.id));
        }
    };

    return { handleAction, clearCart, clearFavorites, removeItemFromCart };
}

export default useCartItem;
