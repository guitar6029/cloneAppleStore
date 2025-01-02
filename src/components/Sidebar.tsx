import { CiSearch, CiHeart } from "react-icons/ci";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { PiLightningFill, PiBag } from "react-icons/pi";
import { themeColors } from "../utils/color/colorUtil";
import { isShoppingCartEmpty } from "../features/ShoppingCartSlice";
import { isFavoritesListEmpty } from "../features/FavoritesSlice";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const checkIfCartIsEmpty = useSelector(isShoppingCartEmpty);
  const checkIFFavoritesIsEmpty = useSelector(isFavoritesListEmpty);

  const indicatorStyle: React.CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: themeColors.importantText,
    position: "absolute",
    top: "10px",
    right: "10px",
    transform: "translate(50%, -50%)",
  };

  const iconContainerStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
  };

  return (
    <div className="flex flex-col items-center p-10 h-full" style={{ borderRight: `2px solid ${themeColors.primaryGray}`, backgroundColor: themeColors.mainBgColor }}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-row items-center self-center">
          <PiLightningFill size={40} color={themeColors.importantText} />
        </div>

        <Link to="/home">
          <div className="flex flex-row items-center group">
            <FaStore className="cursor-pointer rounded-full p-2 group-hover:bg-[#8d8c8a] group-hover:fill-white transition duration-300 ease-in" size={50} color={themeColors.secondaryGray} />
            {/* <span className="text-white font-semibold group-hover:text-[#fff17b] transition duration-300 ease-in">Home</span> */}
          </div>
        </Link>

        <Link to="/search">
          <div className="flex flex-row items-center gap-1 group">
            <CiSearch className="cursor-pointer rounded-full p-2 group-hover:bg-[#8d8c8a] group-hover:fill-white transition duration-300 ease-in" size={50} color={themeColors.secondaryGray} />
            {/* <span className="text-white font-semibold group-hover:text-[#fff17b] transition duration-300 ease-in">Search</span> */}
          </div>
        </Link>

        <Link to="/favorites">
          <div className="flex flex-row items-center gap-2 group" style={iconContainerStyle}>
            <CiHeart className="cursor-pointer rounded-full p-2 group-hover:bg-[#8d8c8a] group-hover:fill-white transition duration-300 ease-in" size={50} color={themeColors.secondaryGray} />
            {!checkIFFavoritesIsEmpty && <div style={indicatorStyle}></div>}
            {/* <span className="text-white font-semibold group-hover:text-[#fff17b] transition duration-300 ease-in">Favorites</span> */}
          </div>
        </Link>

        <Link to="/cart">
          <div className="flex flex-row items-center group" style={iconContainerStyle}>
            <PiBag className="cursor-pointer rounded-full p-2 group-hover:bg-[#8d8c8a] group-hover:fill-white transition duration-300 ease-in" size={50} color={themeColors.secondaryGray} />
            {!checkIfCartIsEmpty && <div style={indicatorStyle}></div>}
            {/* <span className="text-white font-semibold group-hover:text-[#fff17b] transition duration-300 ease-in">Cart</span> */}
          </div>
        </Link>

        <Link to="/account">
          <div className="flex flex-row items-center gap-2 group">
            <MdAccountCircle className="cursor-pointer rounded-full p-2 group-hover:bg-[#8d8c8a] group-hover:fill-white transition duration-300 ease-in" size={50} color={themeColors.secondaryGray} />
            {/* <span className="text-white font-semibold group-hover:text-[#fff17b] transition duration-300 ease-in">Account</span> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
