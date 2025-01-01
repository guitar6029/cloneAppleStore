import { CiSearch, CiHeart } from "react-icons/ci";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { PiLightningFill, PiBag } from "react-icons/pi";
import { themeColors } from "../utils/color/colorUtil";
import { isShoppingCartEmpty } from "../features/ShoppingCartSlice";
import { useSelector } from 'react-redux';
const Sidebar = () => {

  const checkIfCartIsEmpty = useSelector(isShoppingCartEmpty);
  console.log('checkIfCartIsEmpty', checkIfCartIsEmpty);


  const cartNotEmptyIndicatorStyle: React.CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: themeColors.importantText,
    position: "relative",
    top: "5px",
    right: "10px",
  }

  return (
    <div className="flex flex-col items-center p-10" style={{ borderRight: `2px solid ${themeColors.primaryGray}`, backgroundColor: themeColors.mainBgColor }}>


      <div className="flex flex-col gap-10">

        <PiLightningFill size={40} color={themeColors.importantText} />


        <Link to="/home">
          <FaStore className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />

        </Link>

        <CiSearch className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />

        <Link to="/favorites">
          <CiHeart className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />

        </Link>


        <Link to="/cart">
          <div className="flex flex-row">
            <PiBag className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />
            {!checkIfCartIsEmpty && <div style={cartNotEmptyIndicatorStyle}></div>}

          </div>
        </Link>

        <Link to="/account">
          <MdAccountCircle className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />

        </Link>


      </div>




    </div>
  );
}

export default Sidebar;
