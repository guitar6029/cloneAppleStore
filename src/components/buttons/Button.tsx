import { themeColors } from "../../utils/color/colorUtil";

type SizeBtn = "sm" | "md" | "lg";

type ButtonTypeProps = {
    text: string;
    size: SizeBtn,
    typeBtn: "primary" | "secondary",
    onClick: () => void;
}

const Button = ({text, size, typeBtn, onClick}: ButtonTypeProps) => {
    
    const btnStyles = {
        backgroundColor: typeBtn === "primary" ? themeColors.importantText : themeColors.secondaryBgCardColor,
        color: typeBtn === "primary" ? themeColors.secondaryBgCardColor : themeColors.importantText,
        fontSize: size === "sm" ? "15px" : size === "md" ? "20px" : "25px",
        height: size === "sm" ? "40px" : size === "md" ? "50px" : "60px"
    }
    
    return (  
        <button style={btnStyles} className="rounded-lg p-2 font-semibold " onClick={onClick}>{text}</button>
    );
}
 
export default Button;