import { IoMdClose } from "react-icons/io";
import { LuBatteryCharging } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { PiBag } from "react-icons/pi";
import useCartItem from "../hooks/useCartItem";

interface PreviewProps {
    selectedItem: any;
    isPreviewOpen: boolean;
    closePreview: () => void;
}

const Preview: React.FC<PreviewProps> = ({ selectedItem, isPreviewOpen, closePreview }) => {

    const { handleAction } = useCartItem();


    return (
        <>
            {isPreviewOpen &&
                <div className="fixed inset-0 bg-gray-700 opacity-40 z-40" onClick={closePreview}></div>}
            <div className={`flex flex-col self-center justify-center fixed top-0 right-0 h-full w-[45%] bg-[#f0eeeb] shadow-lg transform ${isPreviewOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50`}>
                <button onClick={closePreview} className="absolute top-4 right-4">
                    <IoMdClose size={30} />
                </button>
                <div className="flex flex-col items-center justify-center self-center gap-10">
                    <h2 className="text-4xl sm:text-sm md:text-lg lg:text-2xl  font-bold">{selectedItem.name}</h2>

                    <div className="flex flex-row gap-2 justify-around">
                        <span className="p-4 bg-gray-200 rounded-full flex flex-row items-center justify-center">
                            <LuBatteryCharging size={20} />
                        </span>
                        <span className="p-4 bg-gray-200 rounded-full flex flex-row items-center justify-center">
                            <FaMoon size={20} />

                        </span>
                        <span className="p-4 bg-gray-200 rounded-full flex flex-row items-center justify-center">
                            <CiAlarmOn size={20} />

                        </span>
                    </div>

                </div>
                <div className="p-10 items-center text-center flex flex-row gap-2">
                    <p className="text-base sm:text-md ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam rem aspernatur ut harum odit repellat labore, placeat deserunt suscipit ullam voluptates, quam, facilis nobis natus quo unde eveniet velit ipsa non. Omnis consectetur deserunt nesciunt rem, aspernatur rerum optio qui.</p>
                </div>

                <hr />

                <div onClick={() => handleAction('cart', selectedItem)} className="hover:bg-gray-200 transtion duration-300 ease-linear w-full flex justify-center flex-row items-center self-center p-5 cursor-pointer gap-4">
                    <PiBag size={30} />
                    <span className="text-base  font-bold">Add to Cart</span>
                </div>
            </div>
        </>
    );
}

export default Preview;
