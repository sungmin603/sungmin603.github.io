import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <a href="/" className="hover:text-blue-500 transition-colors">
            {/* 여기에 본인 이름 또는 닉네임을 넣어주세요 */}
            Your Name
          </a>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            </li>
            <li>
              <a href="#skills" className="text-gray-600 hover:text-blue-500 transition-colors">Skills</a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-blue-500 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;