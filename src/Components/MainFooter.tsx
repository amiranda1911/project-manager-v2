import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const MainFooter = () => {
  return (
    <footer className="bg-primary-color-dark text-white py-6">
      <div className="container mx-auto flex flex-col md: items-center lg:flex-row lg:justify-around 
       space-y-4 lg:space-y-0">
        
        {/* Ícones de Rede Social */}
        <div className="flex space-x-4 lg:space-x-8 cursor-pointer lg:order-1">
          <a href="https://www.facebook.com/login/?locale=pt_BR" target="blank">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <FaFacebookF className="text-[#000] hover:text-colorFacebook" />
            </div>
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <FaInstagram className="text-[#000]" />
            </div>
          </a>
          <a href="https://br.linkedin.com/" target="blank">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <FaLinkedinIn className="text-[#000] hover:text-colorLinkedin" />
            </div>
          </a>
        </div>

        {/* Texto de Direitos e Links */}
        <div className="text-center lg:text-left lg:order-2">
          <p>© 2024 Project Manager. All rights reserved.</p>
        </div>

        {/* Links de Políticas */}
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4 lg:gap-20 text-14 lg:order-3 lg:space-x-8">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
