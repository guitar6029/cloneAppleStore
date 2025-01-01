import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { PiLightningFill, PiBag } from "react-icons/pi";
import { themeColors } from "../utils/color/colorUtil";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();

  return (
    <div className="flex flex-col items-center   sm:justify-start xl:justify-between p-10" style={{ borderRight: `2px solid ${themeColors.primaryGray}`, backgroundColor: themeColors.mainBgColor }}>
      <div className="flex flex-col sm:mb-2">
        <PiLightningFill size={40} color={themeColors.importantText} />

      </div>

      <div className="flex flex-col gap-10">

        <Link to="/home">
          <FaStore className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />

        </Link>

        <CiSearch className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />
        <CiHeart className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />

        <Link to="/cart">
          <PiBag className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />
        </Link>

        <AiOutlineMessage className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />


      </div>


      <div className="flex flex-row items-center justify-center p-2">
        <Link to="/account">
          <MdAccountCircle className="cursor-pointer rounded-full p-2 hover:bg-[#8d8c8a] hover:fill-white" size={50} color={themeColors.secondaryGray} />

        </Link>
      </div>
      {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/' } })}>
        Logout
      </button> */}
    </div>
  );
}

export default Sidebar;
