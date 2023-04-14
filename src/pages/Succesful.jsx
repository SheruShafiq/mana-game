import React from "react";
import ImageSelector from "../components/ImageSelector";

import image1 from "../media/1.jpg";
import image2 from "../media/2.jpg";
import image3 from "../media/3.jpg";
import image5 from "../media/5.jpg";
import image6 from "../media/6.jpg";
import image7 from "../media/7.jpg";
import image8 from "../media/8.jpg";
import image9 from "../media/9.jpg";
import image10 from "../media/10.jpg";

import "../styles/Succesful.css";

const Succesful = () => {
  const images = [
    image1,
    image2,
    image3,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <div id="bigChungus">
      <div className="succesfulParent">
        <ImageSelector images={images} />
      </div>
    </div>
  );
};

export default Succesful;
