import React, { useState, useEffect } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { themeColors } from "../utils/color/colorUtil";
import Button from "../components/buttons/Button";

const Account: React.FC = () => {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const { user, isLoading, logout } = useAuth0();

    useEffect(() => {
        if (!isLoading && user) {
            setUserInfo(user);
        }
    }, [user, isLoading]);

    const themeStyle = {
        color: themeColors.importantText,
    };

    if (isLoading) {
        return <div>Loading...</div>; // Display a loading message while user info is being fetched
    }

    return (
        <div className="flex flex-col justify-between  min-h-screen">
            <div className="flex flex-col gap-2 p-10">
                <h3 style={themeStyle} className="text-7xl text-white font-extrabold">
                    ACCOUNT
                </h3>
                <div className="flex flex-col gap-2">
                    <h3 className="text-4xl text-white font-extrabold">
                        {userInfo ? userInfo?.name : "User Name"}
                    </h3>
                    {userInfo?.picture && <img className="w-16 h-16" src={userInfo.picture} alt="User Profile" />}
                </div>
            </div>
            <div className="w-[200px] p-10 flex flex-col gap-10">
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} text="Sign Out" size="md" typeBtn="primary" />

            </div>
        </div>
    );
};

export default Account;
