import React, { useState, useEffect } from "react";
const ImageSliderRes = ({ productImages, productImagesRes }) => {
  const [images] = useState(productImages);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  //   const prevImage = () => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   };

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(nextImage, 8000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentImageIndex]);

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        className="image-sliderRes"
        alt="Slider"
      />
    </div>
  );
};

export default ImageSliderRes;
