// src/App.jsx

import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  // 왼쪽 40%, 오른쪽 60% 비율로 변경
  return (
    <div className="grid grid-cols-[2fr_3fr] bg-gray-50 min-h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;