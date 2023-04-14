import React, { useState, useEffect } from "react";
import "../styles/ImageSelector.css"; // Import the CSS file for styling
import loadingGif from "../media/loading-gif.gif"; // Import the loading gif
import { useNavigate } from "react-router-dom";

const ImageSelector = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]);
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      setSelectedImage(null); // Reset the selected image state
    };
  }, [images]);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = selectedImage;
    link.download = "random-image.jpg";
    link.click();
  };

  const handleButtonClick = () => {
    navigate("/Application");
  };

  return (
    <div className="random-image-container">
      {isLoading && (
        <div className="loader">
          <img src={loadingGif} alt="loading" />
        </div>
      )}
      {!isLoading && (
        <>
          <img className="image" src={selectedImage} alt="randomly selected" />
          <div>
            <button id="buttonsDownloader" onClick={downloadImage}>
              Download Image
            </button>
            <button id="buttonsDownloader2" onClick={handleButtonClick}>
              I WANNA SEE MORE!
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSelector;
