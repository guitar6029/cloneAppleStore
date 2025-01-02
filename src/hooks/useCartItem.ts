import { useDispatch } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity, clearShoppingCart } from "../features/ShoppingCartSlice";
import { updateQuantity, resetQuantity } from "../features/DepartmentSlice";
import { handleFavorites } from "../features/FavoritesSlice";
import { clearFavoriteItems } from "../features/FavoritesSlice";


const useCartItem = () => {

    const dispatch = useDispatch();

    const clearCart = (itemsToClear: Array<any>) => {
        dispatch(clearShoppingCart());
        dispatch(resetQuantity(itemsToClear));
    }

    const clearFavorites = (itemsToClear: Array<any>) => {
        dispatch(clearFavoriteItems())
    }

    const handleAction = (type: string, item: any) => {
        
        if (type ==='increaseQuantity') {
                dispatch(increaseQuantity(
                    {
                        id: item.id,
                        quantity: item.quantity
                    }
                ))
        } else if (type === 'decreaseQuantity') {
                dispatch(decreaseQuantity(
                    {
                        id: item.id,
                        quantity: item.quantity
                    }
                ))
        }
        else if (type === 'heart') {
            //add to favorites
            dispatch(handleFavorites(item));

        } else if (type === 'cart') {
            dispatch(addToCart(
                {
                    id: item.id,
                    name: item.name,
                    price: item.price
                }
            ));
            dispatch(updateQuantity(
                {
                    id: item.id,
                    quantity: item.quantity - 1
                }
            ));
        } 
        
    };

    return { handleAction, clearCart, clearFavorites };
}


export default useCartItem;