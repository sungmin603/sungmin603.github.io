import React from 'react';
import profileImage from '../assets/images/profile.jpg'; // 프로필 이미지 경로 수정

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-gray-900 text-gray-100 p-6 flex flex-col items-center">
      <div className="flex flex-col items-center mb-10">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-xl mb-4"
        />
        <h1 className="text-3xl font-bold text-white">Your Name</h1>
        <p className="text-sm text-gray-400 mt-2 text-center">
          Software Engineer specializing in React and front-end development.
        </p>
      </div>

      <nav className="w-full">
        <ul className="space-y-2">
          <li>
            <a href="#about" className="block p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <span className="font-semibold text-lg">About</span>
            </a>
          </li>
          <li>
            <a href="#education" className="block p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <span className="font-semibold text-lg">Education</span>
            </a>
          </li>
          <li>
            <a href="#experience" className="block p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <span className="font-semibold text-lg">Experience</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="block p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <span className="font-semibold text-lg">Projects</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;