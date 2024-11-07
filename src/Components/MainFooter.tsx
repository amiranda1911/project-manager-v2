import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const MainFooter = () => {
  return (

    <footer className="bg-primary-color-dark  text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-col md:justify-between space-y-4 md:space-y-0">
        
        {/* Ícones de Rede Social */}
        <div className="flex space-x-4 md:flex-row md:space-x-8">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">

            <FontAwesomeIcon icon={faFacebookF} className="text-black-black" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <FontAwesomeIcon icon={faInstagram} className="text-black-black" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-black-black" />

          </div>
        </div>

        {/* Texto de Direitos e Links */}
        <div className="text-center md:text-left  ">
          <p>© 2024 Project Manager. All rights reserved.</p>
        </div>

        <div className="grid place-items-center h-full gap-4 lg:space-x-6 text-sm  md:inline-flex">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;

