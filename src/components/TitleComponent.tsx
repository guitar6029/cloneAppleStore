import { themeColors } from "../utils/color/colorUtil";

type TitleProps = {
    title: string;
    size: string;
}

const TitleComponent : React.FC<TitleProps> = ({title, size = "text-7xl"} : TitleProps) => {
    
    const themeStyle = {
            color: themeColors.importantText,
        };
    
    
    return ( 
        <h3 style={themeStyle} className={`${size} font-extrabold`}>
        {title}
    </h3>  
     );
}
 
export default TitleComponent;