import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  zIndex: 0,
};

const properties = {
  indicators: true,
  zIndex: 0,
};

export default function ImageSlider({ w1, w2, w3, w4 }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <>
      {isSmallScreen ? (
        <>
          <div
            style={{
              top: 0,
              margin: 0,
              padding: 0,
              marginTop: "-0.1rem",
              zIndex: 1,
              position: "relative",
            }}>
            <Fade {...properties}>
              {slideImages.map((image, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                    }}>
                    <img
                      src={image.url}
                      style={{ zIndex: 0 }}
                      width="100%"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </>
      ) : (
        <div
          id="fade-container"
          style={{
            top: 0,
            margin: 0,
            padding: 0,
            marginTop: "-0.1rem",
          }}>
          <Fade {...properties}>
            {slideImages.map((image, index) => (
              <div
                key={index}
                style={{
                  ...divStyle,
                }}>
                <img src={image.url} maxHeight="27rem" width="100%" alt="" />
              </div>
            ))}
          </Fade>
        </div>
      )}
    </>
  );
}
