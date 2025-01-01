import { themeColors } from "../utils/color/colorUtil";
import CardItem from "../components/card/CardItem";
import { HeartIcon, BagIcon } from "../utils/icons";
import Button from "../components/buttons/Button";
import { data } from "../data/dummyData";
import { PREVIEW_NUMBER_SIZE } from "../utils/Numbers/constants";
import useCartItem from "../hooks/useCartItem";



const CUSTOM_TEXT = "At our store, you'll find the latest and greatest gadgets designed to enhance your lifestyle and keep you ahead of the tech curve. From cutting-edge electronics to innovative accessories, we’ve got everything you need to stay connected and entertained. Discover the future of technology with us!";
const customTextStyle = { color: themeColors.textSection };

const Home: React.FC = () => {

    //set tab name 
    document.title = "Home";

    const { handleAction } = useCartItem();

    const handlePrimaryAction = (event?: string) => {
        if (event) {
            console.log(event);
        }
    }

    const previewItems = data.slice(0, PREVIEW_NUMBER_SIZE);
    console.log(previewItems);

    return (
        <div className="flex p-10 flex-col gap-10 self-center min-h-screen">
            <div className="flex flex-col gap-4">
                <h3 className="text-basel sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl text-white font-extrabold">LET&apos;S FIND THE</h3>
                <h3 style={{ color: themeColors.importantText }} className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl text-white font-extrabold">BEST EQUIPMENT</h3>
                <h3 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-extrabold text-white">FOR YOU</h3>
            </div>

            <div className="items-container flex flex-wrap gap-4">
                {previewItems.map((item, index) => (
                    <CardItem
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

                <p style={customTextStyle} className="text-2xl xs:text-sm sm:text-md md:text-lg xl:text-2xl  ">{CUSTOM_TEXT}</p>

            </div>

            <div className="w-[300px] flex flex-col gap-12">
                <Button onClick={handlePrimaryAction} text="Explore More" size="md" typeBtn="primary" />

            </div>
        </div>
    );
}

export default Home;
