import {
  brandName,
  colorName,
  colorNameJ,
  brandNameJ,
  colorNameS,
  brandNameS,
  brandNameK,
  colorNameJP,
  brandNameJP,
  colorNameK,
  productWomenJump,
  productWomenKurti,
  productWomenshirts,
  productWomenTshirt,
  productWomenJoggers,
} from "../service";
import React from "react";
import Footer from "./Footer";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import WomenNav from "./WomenNav";
import WGallery from "./WGallery";
import DW from "../assets/DW.jpg";
import JW from "../assets/JW.jpg";
import btS from "../assets/btS.jpg";
import jog from "../assets/jog.jpg";
import cargo from "../assets/cargo.jpg";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import basis from "../assets/basis.jpg";
import member from "../assets/member.png";
import shirt1 from "../assets/shirt1.jpg";
import basicB from "../assets/basicB.jpg";
import bannerT from "../assets/bannerT.jpg";
import bannerJ from "../assets/bannerJ.jpg";
import bannerBS from "../assets/bannerBS.jpg";
import { Card, Image, Container } from "@chakra-ui/react";

export default function WomenSection() {
  return (
    <>
      <WomenNav />
      <ImageSlider w1={w1} w2={w2} w3={w3} w4={w4} />
      <Card style={{ width: "77.8rem", marginTop: 0 }} className="heading1">
        COLLECTIONS
      </Card>
      <Container display="flex">
        <Container className="iBox">
          <Link
            to="/category"
            state={{
              data: productWomenTshirt,
              Banner: basicB,
              colorName: colorName,
              brandName: brandName,
              Heading: "Women's Basics",
            }}>
            <Image src={basis} className="categoryImage" alt="SHIRTS" />
          </Link>
        </Container>

        <Container className="iBox">
          <Link
            to="/category"
            state={{
              data: productWomenKurti,
              colorName: colorNameK,
              brandName: brandNameK,
              Heading: "Women Dresses",
            }}>
            <Image src={DW} className="categoryImage" alt="T-SHIRTS" />
          </Link>
        </Container>
        <Container className="iBox">
          <Link
            to="/category"
            state={{
              data: productWomenJump,
              Banner: bannerJ,
              colorName: colorNameJP,
              brandName: brandNameJP,
              Heading: "Women Jumpsuit",
            }}>
            <Image
              src={JW}
              className="categoryImage "
              alt="OVERSIZED T-SHIRTS"
            />
          </Link>
        </Container>
      </Container>
      <Card className="heading1">SHOP BY COLOR</Card>
      <WGallery />
      <Card className="heading1">CATEGORIES</Card>
      <Container display="flex">
        <Container className="iBox">
          <Link
            to="/category"
            state={{
              Banner: bannerT,
              colorName: colorName,
              brandName: brandName,
              data: productWomenTshirt,
              Heading: "Women T-Shirt",
            }}>
            <Image src={btS} className="categoryImage" alt="SHIRTS" />
          </Link>
        </Container>
        <Container className="iBox">
          <Link
            to="/category"
            state={{
              Banner: jog,
              colorName: colorNameJ,
              brandName: brandNameJ,
              Heading: "Women Joggers",
              data: productWomenJoggers,
            }}>
            <Image src={cargo} className="categoryImage" alt="T-SHIRTS" />
          </Link>
        </Container>
        <Container className="iBox">
          <Link
            to="/category"
            state={{
              Banner: bannerBS,
              colorName: colorNameS,
              brandName: brandNameS,
              data: productWomenshirts,
              Heading: "Women's Shirts",
            }}>
            <Image
              src={shirt1}
              className="categoryImage "
              alt="OVERSIZED T-SHIRTS"
            />
          </Link>
        </Container>
      </Container>

      <Card className="heading1">MEMBERSHIP</Card>
      <Image src={member} alt="membership" width="100%" />
      <Footer />
    </>
  );
}
