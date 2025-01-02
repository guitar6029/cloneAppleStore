import { themeColors } from "../../utils/color/colorUtil";

type SizeBtn = "sm" | "md" | "lg";

type ButtonTypeProps = {
    text: string;
    size: SizeBtn,
    typeBtn: "primary" | "secondary",
    onClick: () => void;
    className?: string; // Optional className prop
}

const Button = ({ text, size, typeBtn, onClick, className }: ButtonTypeProps) => {
    const btnStyles = {
        // backgroundColor: typeBtn === "primary" ? themeColors.importantText : themeColors.secondaryBgCardColor,
        color: typeBtn === "primary" ? themeColors.secondaryBgCardColor : themeColors.importantText,
        fontSize: size === "sm" ? "15px" : size === "md" ? "20px" : "25px",
        height: size === "sm" ? "40px" : size === "md" ? "50px" : "60px"
    }
    
    return (
        <button 
            style={btnStyles} 
            className={`bg-[#f1d02f] hover:bg-[#fff17b] transition duration-300 ease-out rounded-lg p-2 font-semibold sm:w-full md:w-full lg:w-1/3 xl:w-1/4 ${className || ""}`} 
            onClick={onClick}
        >
            {text}
        </button>
    );
}
 
export default Button;
