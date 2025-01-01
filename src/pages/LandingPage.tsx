import { useAuth0 } from "@auth0/auth0-react";


const LandingPage = () => {

    const { loginWithRedirect } = useAuth0();

    const cardStyle = {
        width: "fit-content",
        height: "150px"
    }



    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div style={cardStyle} className="flex flex-row items-center justify-center 
            text-center group bg-[#242529] border-2 border-[#4d4d4f] 
             hover:bg-[#4d4d4f] transition duration-300 ease-out rounded-lg gap-4 shadow-lg p-8">


                <button
                    onClick={() => loginWithRedirect()}

                    className=" text-4xl w-full rounded-lg p-2 
                        font-semibold
                        text-[#c1b264]
                        group-hover:text-[#fff17b] 
                        transition duration-300 ease-out "
                >WELCOME
                </button>

            </div>
        </div>);
}

export default LandingPage;