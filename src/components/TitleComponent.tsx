import { themeColors } from "../utils/color/colorUtil";

type TitleProps = {
    title: string;
}

const TitleComponent : React.FC<TitleProps> = ({title} : TitleProps) => {
    
    const themeStyle = {
            color: themeColors.importantText,
        };
    
    
    return ( 
        <h3 style={themeStyle} className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl font-extrabold">
        {title}
    </h3>  
     );
}
 
export default TitleComponent;