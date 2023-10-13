import {
  productL,
  productWhite,
  productPink,
  productBlack,
  productBlue,
  blackbrandName,
  whitebrandName,
  bluebrandName,
  LbrandName,
  pinkbrandName,
} from "../service";
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

export default function WGallery() {
  return (
    <Carousel cols={3} rows={1}>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWhite,
            Banner: wB,
            Heading: "Women White Collection",
            brandName: whitebrandName,
          }}>
          <img src={white} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productPink,
            Banner: bP,
            brandName: pinkbrandName,
            Heading: "Women Pink Collection",
          }}>
          <img className="gallery" src={pink} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productBlack,
            Banner: bB,
            brandName: blackbrandName,
            Heading: "Women Black Collection",
          }}>
          <img src={blk} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productBlue,
            Banner: blueBanner,
            brandName: bluebrandName,
            Heading: "Women Blue Collection",
          }}>
          <img src={Blue} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productWhite,
            Banner: wB,
            brandName: whitebrandName,
            Heading: "Women White Collection",
          }}>
          <img src={white} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/category"
          state={{
            data: productL,
            Banner: bL,
            brandName: LbrandName,
            Heading: "Women Lavender Collection",
          }}>
          <img src={Pretty} className="gallery" alt="" />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}
