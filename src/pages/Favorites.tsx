import { RootState } from "../store";
import { useSelector } from "react-redux";
import TitleComponent from "../components/TitleComponent";
import { getFavorites } from "../features/FavoritesSlice";
import Button from "../components/buttons/Button";
import useCartItem from "../hooks/useCartItem";
const Favorites: React.FC = () => {


    const favoriteItems = useSelector((state: RootState) => getFavorites(state));

    const { clearFavorites } = useCartItem();
    document.title = "Favorites";



    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col gap-2 p-10">
                <TitleComponent title="FAVORITES" />
            </div>
            <div className="flex flex-col gap-4 p-10">
                {favoriteItems.length > 0 ? (
                    favoriteItems.map((item) => (
                        <div key={item.id} className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-[#4d4d4f] hover:bg-[#5B5B5D] transition duration-300 ease-out">
                            <span className="text-white self-center">{item.name}</span>
                            <span className="text-white self-center justify-self-end font-semibold">${item.price}</span>
                        </div>
                    ))
                ) : (
                    <div className="flex justify-center p-10">
                        <span className="text-white text-base xl:text-2xl lg:text-xl md:text-lg">
                            No favorites found. Click on the heart icon to add items to your favorites.
                        </span>
                    </div>
                )}
            </div>
            {favoriteItems.length > 0 && (
                <div className="flex flex-row p-10">
                    <Button text="CLEAR FAVORITES" typeBtn="primary" onClick={() => clearFavorites(favoriteItems)} size="md" />
                </div>
            )}

        </div>
    );
}

export default Favorites;