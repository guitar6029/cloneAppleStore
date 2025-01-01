import TitleComponent from "../components/TitleComponent";
const Favorites : React.FC = () => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col gap-2 p-10">
                <TitleComponent title="FAVORITES" size="text-7xl" />
            </div>
        </div>
     );
}
 
export default Favorites;