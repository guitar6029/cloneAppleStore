import { data } from "../data/dummyData";
import { HeartIcon, BagIcon } from "../utils/icons";
import { Link, useNavigate } from "react-router-dom";
import { PREVIEW_NUMBER_SIZE } from "../utils/Numbers/constants";
import { themeColors } from "../utils/color/colorUtil";
import { useReducer, useMemo } from "react";
import Button from "../components/buttons/Button";
import CardItem from "../components/card/CardItem";
import Preview from "../components/Preview";
import useCartItem from "../hooks/useCartItem";

const CUSTOM_TEXT = "At our store, you'll find the latest and greatest gadgets designed to enhance your lifestyle and keep you ahead of the tech curve. From cutting-edge electronics to innovative accessories, we’ve got everything you need to stay connected and entertained. Discover the future of technology with us!";
const customTextStyle = { color: themeColors.textSection };
const initialState = {
    selectedItem: {},
    isPreviewOpen: false
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "OPEN_PREVIEW":
            return { ...state, isPreviewOpen: true, selectedItem: action.payload };
        case 'CLOSE_PREVIEW':
            return { ...state, isPreviewOpen: false };
        default:
            return state;
    }
};

const Home: React.FC = () => {
    // Set tab name 
    document.title = "Home";

    const { handleAction } = useCartItem();
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    

    const previewItems = useMemo(() => {
        const items = data.slice(0, PREVIEW_NUMBER_SIZE);
        return items.sort(() => Math.random() - 0.5);
    }, []);  

    
    return (
        <>
            {/* PREVIEW */}
            {state.isPreviewOpen && (
                <Preview
                    selectedItem={state.selectedItem}
                    isPreviewOpen={state.isPreviewOpen}
                    closePreview={() => dispatch({ type: 'CLOSE_PREVIEW' })}
                />
            )}
            <div className="flex p-10 flex-col gap-10 self-center justify-around min-h-screen">
                <div className="flex flex-col  gap-4">
                    <h3 className="text-base sm:text-left md:text-left sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl text-white font-extrabold">LET&apos;S FIND THE</h3>
                    <h3 style={{ color: themeColors.importantText }} className="sm:text-center md:text-left text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl text-white font-extrabold">BEST EQUIPMENT</h3>
                    <h3 className="sm:text-end md:text-left text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl text-white font-extrabold">FOR YOU</h3>
                </div>

                <div className="items-container flex flex-wrap gap-4">
                    {previewItems.map((item, index) => (
                        <CardItem
                            viewItem={() => dispatch({ type: "OPEN_PREVIEW", payload: item })}
                            item={item}
                            key={index}
                            size="sm"
                            title={item.name}
                            smallTitle={item.rating}
                            price={item.price}
                            icon1={BagIcon}
                            icon2={HeartIcon}
                            icon1Size={30}
                            icon2Size={30}
                            actionPrimary={(eventType: string) => handleAction(eventType, { id: item.id, name: item.name, price: item.price })}
                            actionSecondary={(eventType: string) => handleAction(eventType, { id: item.id, name: item.name, price: item.price })}
                            actionPrimaryType="cart"
                            actionSecondaryType="heart"
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-12">
                    <p style={customTextStyle} className="text-2xl sm:text-md md:text-lg xl:text-2xl">{CUSTOM_TEXT}</p>
                </div>

                <div className="w-full flex flex-col gap-12">
                    <Link to="/search" className="sm:w-full">
                        <Button onClick={() => navigate('/search')} text="Explore More" size="md" typeBtn="primary" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
