import React from 'react';
import logo from '../img/logo 1.png';

interface MainHeaderProps {
  pageType: 'page1' | 'page2' | 'page3';
}

const MainHeader: React.FC<MainHeaderProps> = ({ pageType }) => {
  return (
    <header className="bg-primary-color-dark text-white py-4 px-8 flex items-center justify-between">
      {/* Esquerda: Logo e Texto */}
      <div className="flex items-center">
        <a href="/"><img src={logo} alt="Logo" className="h-10 w-10 md:h-[50px] md:w-[50px] mr-3 "  /></a>
        <span className="font-roboto text-14 md:text-17 ">Project Manager</span>
      </div>

      {/* Conteúdo direito baseado na página */}
      {pageType === 'page1' && (
        <a href="/login">
          <button className="w-[105px] h-[36] lg:w-[240px] border border-white text-white px-4 py-2 rounded-[30px] font-roboto text-15 md:text-16 md:[24px]md:w-40 cursor-pointer  hover:border-blue-hoverloguin ">
            Login
          </button>
        </a>
      )}
      
      {pageType === 'page3' && (
        <nav className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Settings</a>
          <a href="#" className="hover:text-gray-300">Profile</a>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded bg-gray-700 text-white focus:outline-none"
          />
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
