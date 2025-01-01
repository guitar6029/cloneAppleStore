import { useDispatch } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "../features/ShoppingCartSlice";
import { updateQuantity } from "../features/DepartmentSlice";


const useCartItem = () => {

    const dispatch = useDispatch();

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
        } else {
            console.log('Unknown type');
        }
    };

    return { handleAction };
}


export default useCartItem;