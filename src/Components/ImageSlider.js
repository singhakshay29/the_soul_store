import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  width: "100%",
  display: "flex",
  height: "450px",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
};

export default function ImageSlider({ w1, w2, w3, w4 }) {
  const slideImages = [
    {
      url: w1,
    },
    {
      url: w2,
    },
    {
      url: w3,
    },
    {
      url: w4,
    },
  ];
  return (
    <div style={{ marginTop: "0.1rem" }}>
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${image.url})`,
                width: "100%",
              }}></div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
