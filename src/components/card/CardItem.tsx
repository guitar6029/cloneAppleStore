import { HeartIcon, BagIcon } from "../../utils/icons";
import { themeColors } from "../../utils/color/colorUtil";

type CardItemsProps = {
  size?: "sm" | "lg",
  title: string,
  smallTitle: string,
  price: number,
  icon1: React.ComponentType<{ size: number }>,
  icon2: React.ComponentType<{ size: number }>,
  icon1Size?: number,
  icon2Size?: number,
  actionPrimary: (event?: string) => void,
  actionSecondary: (event?: string) => void,
  actionPrimaryType: string,
  actionSecondaryType: string,
};

const CardItem = ({
  size = "sm",
  title,
  smallTitle,
  price,
  icon1: Icon1,
  icon2: Icon2,
  icon1Size = 20,
  icon2Size = 20,
  actionPrimaryType,
  actionSecondaryType,
  actionPrimary,
  actionSecondary,
}: CardItemsProps) => {
  
  const cardStyle = {
    width: size === "sm" ? "400px" : "500px",
    height: size === "sm" ? "450px" : "500px",
  };

  const smallTitleStyle = {
    color: themeColors.tertiaryGray
  }

  

  return (
    <div style={cardStyle} className="group bg-[#242529] border-2 border-[#4d4d4f]  hover:bg-[#4d4d4f] transition duration-300 ease-out     rounded-lg flex flex-col gap-4 shadow-lg p-8">
      <div className="image-container h-full rounded-t-lg"></div>
      <div className="flex flex-col gap-1 mt-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <h3 style={smallTitleStyle} className="text-md text-gray-500">{smallTitle}</h3>
      </div>
      <div className="flex flex-row justify-between items-center mt-auto">
        <h3 className="text-5xl font-semibold text-[#c1b264] group-hover:text-[#fff17b] transition duration-300 ease-out">${price}</h3>
        <div className="flex flex-row gap-2">
          <span className="cursor-pointer rounded-full p-2 bg-[#4d4d4f] text-white hover:bg-white transition duration-300 ease-out hover:text-[#4d4d4f] " onClick={() => actionPrimary(actionPrimaryType)}>
            <Icon1 size={icon1Size} />
          </span>
          <span className="cursor-pointer rounded-full p-2 bg-[#4d4d4f] text-white hover:bg-white transition duration-300 ease-out hover:text-[#4d4d4f]" onClick={() => actionSecondary(actionSecondaryType)}>
            <Icon2 size={icon2Size} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
