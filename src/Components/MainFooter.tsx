import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const MainMainFooter = () => {
  return (
    <footer className="    bg-primary-color-dark  text-white py-6">
      <div className="container mx-auto flex flex-col h-[100px] h-[100px] items-center md:flex-row md:justify-between space-y-4 md:space-y-0">
        
        {/* Ícones de Rede Social */}
        <div className="flex space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <FaFacebookF  className="text-[#000]"/>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <FaInstagram className="text-[#000]"/>

          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <FaLinkedinIn className="text-[#000]"/>
          </div>
        </div>

        {/* Texto de Direitos e Links */}
        <div className="text-center md:text-left">
          <p>© 2024 Project Manager. All rights reserved.</p>
        </div>

        <div className="space-x-6 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
