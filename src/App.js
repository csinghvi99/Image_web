import React from "react";
import ImageGallery from "./Components/ImageGallery";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Div 1: Heading */}
      <div className="heading-container">
        <div className="logo-container">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/06/Shutterstock_logo.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <h1>Image Gallery</h1>
      </div>

      <div className="header-image-container">
        {/* Add your header image here */}
        <img
          src="https://infostockphoto.com/wp-content/uploads/2015/07/istock_logo_complete.png"
          alt="Header Image"
          className="header-image"
        />
      </div>

      {/* Div 2: Image Gallery with Load More */}
      <div className="image-gallery-container">
        <ImageGallery />
        {/* Add Load More button or functionality here */}
      </div>
    </div>
  );
};

export default App;
