import TitleComponent from "../components/TitleComponent";
const Search = () => {
    return ( 
        <div className="flex flex-col justify-between  min-h-screen">
            <div className="flex flex-col gap-2 p-10">
                <TitleComponent title="Search" size="text-7xl" />
            </div>
        </div>
     );
}
 
export default Search;