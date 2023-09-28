import React from "react";
import ImageGallery from "./Components/ImageGallery";
import "./App.css";

const App = () => {
  return (
    <div className="App">
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
        <img
          src="https://infostockphoto.com/wp-content/uploads/2015/07/istock_logo_complete.png"
          alt="Header Image"
          className="header-image"
        />
      </div>
      <div className="image-gallery-container">
        <ImageGallery />
      </div>
    </div>
  );
};

export default App;
