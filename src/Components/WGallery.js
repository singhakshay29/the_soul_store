import React from "react";
import bB from "../assets/bB.jpg";
import bL from "../assets/bL.jpg";
import bP from "../assets/bP.jpg";
import wB from "../assets/wB.jpg";
import blk from "../assets/blk.jpg";
import pink from "../assets/pink.jpg";
import Blue from "../assets/Blue.jpg";
import white from "../assets/white.jpg";
import { Link } from "react-router-dom";
import Pretty from "../assets/Pretty.jpg";
import blueBanner from "../assets/bluebanner.jpg";
import Carousel from "better-react-carousel";
import { useSelector } from "react-redux";

export default function WGallery() {
  const { productsListFilter } = useSelector((state) => state.app);
  const {
    productWomenWhiteData,
    productWomenLavenderData,
    productWomenPinkData,
    productWomenBlackData,
    productWomenBlueData,
  } = productsListFilter;
  return (
    <Carousel cols={3} rows={1}>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWomenWhiteData,
            Banner: wB,
            Heading: "Women White Collection",
          }}>
          <img src={white} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWomenPinkData,
            Banner: bP,
            Heading: "Women Pink Collection",
          }}>
          <img className="gallery" src={pink} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWomenBlackData,
            Banner: bB,

            Heading: "Women Black Collection",
          }}>
          <img src={blk} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWomenBlueData,
            Banner: blueBanner,

            Heading: "Women Blue Collection",
          }}>
          <img src={Blue} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWomenWhiteData,
            Banner: wB,

            Heading: "Women White Collection",
          }}>
          <img src={white} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWomenLavenderData,
            Banner: bL,
            Heading: "Women Lavender Collection",
          }}>
          <img src={Pretty} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}
