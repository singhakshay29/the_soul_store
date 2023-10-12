import {
  productL,
  productWhite,
  productPink,
  productBlack,
  productBlue,
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
import Carousel from "better-react-carousel";

export default function WGallery() {
  return (
    <Carousel cols={3} rows={1}>
      <Carousel.Item>
        <Link to="/category" state={{ data: productWhite, data2: wB }}>
          <img src={white} className="categoryImage" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/category" state={{ data: productPink, data2: bP }}>
          <img className="categoryImage" src={pink} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/category" state={{ data: productBlack, data2: bB }}>
          <img src={blk} className="categoryImage" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/category" state={{ data: productBlue }}>
          <img src={Blue} className="categoryImage" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/category" state={{ data: productWhite }}>
          <img src={white} className="categoryImage" alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/category" state={{ data: productL, data2: bL }}>
          <img src={Pretty} className="categoryImage" alt="" />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}
