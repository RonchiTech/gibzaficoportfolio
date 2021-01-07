import React from 'react';
import './App.css';
import VideoPage from './components/VideoPage/VideoPage';
import MainPage from './components/MainPage/MainPage';
import PhotoPage from './components/PhotoPage/PhotoPage';
import PortfolioVideoPage from './components/PortfolioVideoPage/PortfolioVideoPage'
import ToolsPage from './components/ToolsPage/ToolsPage'
import ServicesPage from './components/ServicesPage/ServicesPage';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <VideoPage />
        <MainPage />
        <PhotoPage />
        <PortfolioVideoPage/>
        <ToolsPage/>
        <ServicesPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
