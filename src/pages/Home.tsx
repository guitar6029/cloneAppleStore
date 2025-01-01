import { themeColors } from "../utils/color/colorUtil";
import CardItem from "../components/card/CardItem";
import { HeartIcon, BagIcon } from "../utils/icons";

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
        </div>
    );
}

export default Home;
