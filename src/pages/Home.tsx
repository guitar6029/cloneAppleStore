import { themeColors } from "../utils/color/colorUtil";


const Home : React.FC = () => {
    return ( 
        <div className="flex p-10 flex-row self-center  min-h-screen">
            <div className="flex flex-col gap-1">
            <h3 className="text-7xl text-white font-extrabold">LET&apos;S FIND THE</h3>
            <h3  style={{ color: themeColors.importantText }} className="text-7xl text-white font-extrabold">BEST EQUIPMENT</h3>
            <h3 className="text-7xl font-extrabold text-white">FOR YOU</h3>
            </div>
        </div>
     );
}
 
export default Home;