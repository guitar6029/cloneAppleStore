import { useDispatch } from "react-redux";
import { addToCart, removeFromShoppingCart } from "../features/ShoppingCartSlice";
import { updateQuantity } from "../features/DepartmentSlice";


const useCartItem = () => {

    const dispatch = useDispatch();
    
    const handleAction = (type: string, item: any) => {
        if (type === 'heart') {
            console.log('Heart clicked');
        } else if (type === 'cart') {
            console.log('Cart clicked');
        } else {
            console.log('Unknown type');
        }
    };

    return { handleAction };
}


export default useCartItem;