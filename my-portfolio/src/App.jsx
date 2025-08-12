import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;