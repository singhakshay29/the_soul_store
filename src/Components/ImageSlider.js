import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "450px",
  width: "100%",
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
    <div style={{ marginTop: "5rem" }}>
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
