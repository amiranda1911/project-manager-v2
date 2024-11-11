import React, { useState } from 'react';
import logo from '../img/logo 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';  // Importando os ícones
import { useAuth } from '../hooks/useAuth'; 
import useLogout from '../hooks/useLogout'; 

interface MainHeaderProps {
  pageType: 'page1' | 'page2' | 'page3';
}

const MainHeader: React.FC<MainHeaderProps> = ({ pageType }) => {
  const { verifyIsAuthenticated,getToken } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isSearchOpen, setIsSearchOpen] = useState(false);  

  const id = getToken()

  const handleHomeClick = () => {
    logout(); 
  };

  const handleSettingsClick = () => {
    if (verifyIsAuthenticated()) {
      navigate('/settings'); 
    }
  };

  const handleProfileClick = () => {
    if (verifyIsAuthenticated()) {
      navigate(`/profile/${id}`);
    }
  };

  return (
    <header className="bg-primary-color-dark text-white py-4 px-8 flex items-center justify-between font-roboto">
     
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-[50px] md:w-[50px] mr-3 cursor-pointer z-10 relative"
          />
        </Link>
        <span className="font-roboto text-14 md:text-17 ">Project Manager</span>
      </div>

      
      {pageType === 'page1' && (
        <Link to="/login">
          <button className="w-[105px] h-[36px] lg:w-[240px] border border-white text-white px-4 py-2 rounded-[30px] font-roboto text-15 md:text-16 cursor-pointer hover:border-blue-hoverloguin flex items-center justify-center z-10 relative">
            Login
          </button>
        </Link>
      )}

      {pageType === 'page3' && (
        <>
          
          <div className="md:hidden flex items-center ml-auto z-20">
            
            <FaBars 
              className="text-white text-2xl cursor-pointer mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // 
            />
            
            
            <FaSearch 
              className="text-white text-2xl cursor-pointer border border-gray-700  rounded-md "
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
            />
          </div>

          
          <div className={`md:hidden absolute top-16 left-0 w-full bg-primary-color-dark transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} z-30`}>
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a onClick={handleHomeClick} className="text-white hover:border-b-2 hover:border-white cursor-pointer w-full text-center">Home</a>
              <a href="#" className="text-white hover:border-b-2 hover:border-white cursor-pointer w-full text-center">About</a>
              <a onClick={handleSettingsClick} className="text-white hover:border-b-2 hover:border-white cursor-pointer w-full text-center">Settings</a>
              <a onClick={handleProfileClick} className="text-white hover:border-b-2 hover:border-white cursor-pointer w-full text-center">Profile</a>
            </nav>
          </div>

         
          {isSearchOpen && (
            <div className="absolute top-16 left-0 w-full bg-primary-color-dark p-4 md:hidden z-40">
              <input
                type="text"
                placeholder="Search in site"
                className="px-3 py-1 pr-10 rounded-lg bg-primary-color-dark text-white border border-gray-700 focus:outline-none hover:border-blue-hoverloguin w-full"
              />
            </div>
          )}
        </>
      )}

      
      {pageType === 'page3' && (
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={handleHomeClick} className="text-white hover:border-b-2 hover:border-white cursor-pointer">Home</a>
          <a href="#" className="text-white hover:border-b-2 hover:border-white cursor-pointer">About</a>
          <a onClick={handleSettingsClick} className="text-white hover:border-b-2 hover:border-white cursor-pointer">Settings</a>
          <a onClick={handleProfileClick} className="text-white hover:border-b-2 hover:border-white cursor-pointer">Profile</a>

          
          <div className="relative">
            <input
              type="text"
              placeholder="Search in site"
              className="px-3 py-1 pr-10 rounded-lg bg-primary-color-dark text-white border border-gray-700 focus:outline-none hover:border-blue-hoverloguin"
            />
            <FaSearch className="absolute opacity-70 right-3 top-1/2 transform -translate-y-1/2 text-2xl" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
