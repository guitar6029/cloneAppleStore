import { data } from "../data/dummyData";
import { itemType } from '../types/types';
import Preview from '../components/Preview';
import React, { useReducer, useEffect } from 'react';
import TitleComponent from "../components/TitleComponent";
import { IoMdClose } from "react-icons/io";

const initialState = {
    search: "",
    searchResults: [],
    selectedItem: {},
    isPreviewOpen: false
}

const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, search: action.payload };
        case "SET_RESULTS":
            return { ...state, searchResults: action.payload };
        case "OPEN_PREVIEW":
            return { ...state, isPreviewOpen: true, selectedItem: action.payload };
        case 'CLOSE_PREVIEW':
            return { ...state, isPreviewOpen: false };
        case "CLEAR_SEARCH":
            return { ...state, search: "", searchResults: [] };
        default:
            return state;
    }
}

const Search = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.search) {
            const results = data.filter(item =>
                item.name.toLowerCase().includes(state.search.toLowerCase())
            );
            
            dispatch({ type: "SET_RESULTS", payload: results });
        } else {
            dispatch({ type: "SET_RESULTS", payload: [] });
        }
    }, [state.search]);

    return (
        <>
            {state.isPreviewOpen && (
                <Preview
                    selectedItem={state.selectedItem}
                    isPreviewOpen={state.isPreviewOpen}
                    closePreview={() => dispatch({ type: 'CLOSE_PREVIEW' })}
                />
            )}
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col gap-2 p-10">
                    <TitleComponent title="Search" />
                </div>
                <div className="flex flex-col  sm:w-full lg:w-1/2 gap-4 p-10">
                    <h3 className="font-semibold text-white text-base xl:text-3xl lg:text-xl md:text-lg sm:text-md ">Type and press enter to search items</h3>
                    <div className="flex flex-row gap-2 items-center">

                        <input
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                if (e.key === "Enter") {
                                    dispatch({ type: "SEARCH", payload: e.currentTarget.value });
                                }
                            }}
                            value={state.search}
                            onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })}
                            className="rounded-lg outline-gray-600 focus:outline-[#7b7577] p-2 w-full bg-black text-white text-2xl"
                            type="text"
                            name="search"
                            id="search"
                        />
                        {state.search && (
                            <IoMdClose onClick={() => dispatch({ type: "CLEAR_SEARCH" })}  size={30} className="text-white cursor-pointer" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-10">
                    {state.searchResults.map((item: itemType, index: number) => (
                        <div onClick={() => dispatch({ type: 'OPEN_PREVIEW', payload: item })} key={index} className="cursor-pointer grid grid-cols-3 p-4 border text-white border-gray-500 rounded-lg shadow-md shadow-black hover:bg-[#5B5B5D] transition duration-300 ease-out">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <span className="font-semibold">{item.name}</span>
                            </div>
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <span className="font-semibold text-gray-500">Rating </span>
                                <span className="font-semibold">{item.rating}</span>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-2">

                                <span className="font-semibold text-[#fff17b]">${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {state.search && state.search.length > 0 && state.searchResults.length === 0 && (    
                    <div className="flex flex-col gap-4 p-10">
                    <span className="text-white text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl">No results</span>
                </div>
                )}
            </div>
        </>
    );
}

export default Search;
