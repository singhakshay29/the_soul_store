import React from "react";
import { Card } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import Footer from "./Footer";
import Category from "./Category";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import { Link } from "react-router-dom";
import MenNav from "./MenNav";

export default function MenSection() {
  return (
    <>
      <MenNav />
      <ImageSlider w1={m1} w2={m2} w3={m3} w4={m4} />
      <Card className="heading1">CATEGORIES</Card>
      <Link to="/tshirt">
        <Category c1={c1} c2={c2} c3={c3} />
      </Link>
      <Card className="heading1">MEMBERSHIP</Card>
      <Footer />
    </>
  );
}
