import { themeColors } from "../utils/color/colorUtil";
import CardItem from "../components/card/CardItem";
import { HeartIcon, BagIcon } from "../utils/icons";
import Button from "../components/buttons/Button";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromShoppingCart } from "../features/ShoppingCartSlice";
import { updateQuantity } from "../features/DepartmentSlice";
import { electronicsData1 } from "./ShoppingCart";



const CUSTOM_TEXT = "At our store, you'll find the latest and greatest gadgets designed to enhance your lifestyle and keep you ahead of the tech curve. From cutting-edge electronics to innovative accessories, we’ve got everything you need to stay connected and entertained. Discover the future of technology with us!";
const customTextStyle = { color: themeColors.textSection};

const Home: React.FC = () => {

    const handlePrimaryAction = (event?: string) => {
        if (event) {
            console.log(event);
        }
    }

    const handleSecondaryAction = (event?: string) => {
        if (event) {
            console.log(event);
        }
    }

    const previewItems = electronicsData1.slice(0, 5);
    console.log(previewItems);

    return (
        <div className="flex p-10 flex-col gap-10 self-center min-h-screen">
            <div className="flex flex-col gap-4">
                <h3 className="text-7xl text-white font-extrabold">LET&apos;S FIND THE</h3>
                <h3 style={{ color: themeColors.importantText }} className="text-7xl text-white font-extrabold">BEST EQUIPMENT</h3>
                <h3 className="text-7xl font-extrabold text-white">FOR YOU</h3>
            </div>

            <div className="items-container flex flex-wrap gap-4">
                <CardItem
                    size="sm"
                    title="Headphone"
                    smallTitle="Headphone"
                    price={100}
                    icon1={HeartIcon}
                    icon2={BagIcon}
                    icon1Size={30}
                    icon2Size={30}
                    actionPrimary={handlePrimaryAction}
                    actionSecondary={handleSecondaryAction}
                    actionPrimaryType="heart"
                    actionSecondaryType="bag"
                />

                <CardItem
                    size="sm"
                    title="Speakers"
                    smallTitle="Speakers"
                    price={200}
                    icon1={HeartIcon}
                    icon2={BagIcon}
                    icon1Size={30}
                    icon2Size={30}
                    actionPrimary={handlePrimaryAction}
                    actionSecondary={handleSecondaryAction}
                    actionPrimaryType="heart"
                    actionSecondaryType="bag"
                />

                <CardItem
                    size="sm"
                    title="Microphone"
                    smallTitle="Microphone"
                    price={150}
                    icon1={HeartIcon}
                    icon2={BagIcon}
                    icon1Size={30}
                    icon2Size={30}
                    actionPrimary={handlePrimaryAction}
                    actionSecondary={handleSecondaryAction}
                    actionPrimaryType="heart"
                    actionSecondaryType="bag" />
            </div>

            <div className="flex flex-col gap-12">
            
                <p style={customTextStyle} className="text-2xl">{CUSTOM_TEXT}</p>
                
            </div>
            
            <div className="w-[300px] flex flex-col gap-12">
            <Button onClick={handlePrimaryAction} text="Explore More" size="md" typeBtn="primary" />

            </div>
        </div>
    );
}

export default Home;
