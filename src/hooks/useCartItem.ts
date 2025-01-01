import { useDispatch } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity, clearShoppingCart } from "../features/ShoppingCartSlice";
import { updateQuantity, resetQuantity } from "../features/DepartmentSlice";


const useCartItem = () => {

    const dispatch = useDispatch();

    const clearCart = (itemsToClear: Array<any>) => {
        dispatch(clearShoppingCart());
        dispatch(resetQuantity(itemsToClear));
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
        else {
            console.log('Unknown type');
        }
    };

    return { handleAction, clearCart };
}


export default useCartItem;