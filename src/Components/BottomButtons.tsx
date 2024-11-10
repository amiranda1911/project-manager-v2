import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const BottomButtons = () => {
  return (
    <>
    <h3 className="font-roboto font-normal text-center text-14 text-[#331436] mb-[0.563rem]">or sign up with...</h3>
                    
    <div className="flex flex-row items-center justify-center gap-[0.813rem]">
        <a href="/" className="flex items-center justify-center border rounded-full border-[#3333334D] w-[6.875rem] h-[3.5rem] text-[#0C82EE] text-23 cursor-pointer hover:border-#268FE4B3" > <FaFacebook /> </a>
        <a href="/" className="flex items-center justify-center border rounded-full border-[#3333334D] w-[6.875rem] h-[3.5rem] text-23 cursor-pointer hover:border-#268FE4B3"> <FcGoogle /> </a>
    </div>
    </>
  )
}

export default BottomButtons