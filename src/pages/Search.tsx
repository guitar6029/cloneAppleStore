import TitleComponent from "../components/TitleComponent";
import { data } from "../data/dummyData";
import { COMMON_SEARCH_NUMBER_SIZE } from "../utils/Numbers/constants";
import {useReducer} from 'react'


const initialState = {
    search: "",
}

const reducer = (state: string, action: any) => {
    switch (action.payload){
        case "SEARCH":
            return action.payload
        default:
            return state    
    }
}

const Search = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    //const commonSearchItems = data.slice(0, COMMON_SEARCH_NUMBER_SIZE);


    return ( 
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col gap-2 p-10">
                <TitleComponent title="Search" />
            </div>
            <div className="flex flex-row self-center w-full p-10">
                <input onKeyDown={(e : React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                        dispatch({type: "SEARCH", payload: e.currentTarget.value})
                    }
                }} className="rounded-lg outline-gray-600 focus:outline-[#7b7577]  p-2 w-full bg-black text-white text-2xl" type="text" name="search" id="search" />
            </div>
        </div>
     );
}
 
export default Search;