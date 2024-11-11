import React from 'react';
import logo from '../img/logo 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth'; 
import useLogout from '../hooks/useLogout'; 

interface MainHeaderProps {
  pageType: 'page1' | 'page2' | 'page3';
}

const MainHeader: React.FC<MainHeaderProps> = ({ pageType }) => {
  const { verifyIsAuthenticated } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();
  
  
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
      navigate('/profile'); 
    }
  };

  return (
    <header className="bg-primary-color-dark text-white py-4 px-8 flex items-center justify-between font-roboto">
      {/* Esquerda: Logo e Texto */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-[50px] md:w-[50px] mr-3 cursor-pointer z-10 relative "
          />
        </Link>
        <span className="font-roboto text-14 md:text-17 ">Project Manager</span>
      </div>

      {/* Conteúdo direito baseado na página */}
      {pageType === 'page1' && (
        <Link to="/login">
          <button className="w-[105px] h-[36px] lg:w-[240px] border border-white text-white px-4 py-2 rounded-[30px] font-roboto text-15 md:text-16 cursor-pointer hover:border-blue-hoverloguin flex items-center justify-center z-10 relative">
            Login
          </button>
        </Link>
      )}

      {pageType === 'page3' && (
        <nav className="flex items-center space-x-4">
          <a onClick={handleHomeClick} className="hover:border-b-2 hover:border-white cursor-pointer">Home</a>
          <a href="#" className="hover:border-b-2 hover:border-white cursor-pointer">About</a>
          <a onClick={handleSettingsClick} className="hover:border-b-2 hover:border-white cursor-pointer">Settings</a>
          <a onClick={handleProfileClick} className="hover:border-b-2 hover:border-white cursor-pointer">Profile</a>

          <div className="relative">
            <input
              type="text"
              placeholder="Search in site"
              className="px-3 py-1 pr-10 rounded-lg bg-primary-color-dark text-white border border-gray-700 focus:outline-none hover:border-blue-hoverloguin"
            />
            <FaSearch className="absolute opacity-70 right-3 top-1/2 transform -translate-y-1/2 text-2x1" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
