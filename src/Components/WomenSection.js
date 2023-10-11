import React from "react";
import Footer from "./Footer";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { Card, Image, Box, Container } from "@chakra-ui/react";
import member from "../assets/member.png";
import { useSelector } from "react-redux";
import WomenNav from "./WomenNav";
import btS from "../assets/btS.jpg";
import cargo from "../assets/cargo.jpg";
import shirt1 from "../assets/shirt1.jpg";

export default function WomenSection() {
  const { productsList } = useSelector((state) => state.app);

  // console.log(productsList);
  const productWomen = productsList.filter((item) => {
    return item.gender === "Women";
  });
  // const productMen = productsList.filter((item) => {
  //   return item.gender === "Men";
  // });
  const productWomenTshirt = productWomen.filter((item) => {
    return item.subCategory === "tshirt";
  });
  console.log(productWomenTshirt);
  // productWomen.map((item) => console.log(item.subCategory));
  // console.log(productMen);
  // console.log(productWomen);

  return (
    <>
      <WomenNav />
      <ImageSlider w1={w1} w2={w2} w3={w3} w4={w4} />
      <Card className="heading1">COLLECTIONS</Card>
      <Container margin="0.5rem">
        <Box display="flex">
          <Link to="/tshirtWomen" state={{ data: productWomenTshirt }}>
            <Image src={btS} className="categoryImage" alt="SHIRTS" />
          </Link>
          <Image src={cargo} className="categoryImage" alt="T-SHIRTS" />
          <Image
            src={shirt1}
            className="categoryImage "
            alt="OVERSIZED T-SHIRTS"
          />
        </Box>
      </Container>
      <Card className="heading1">MEMBERSHIP</Card>
      <Image src={member} alt="membership" width="100%" />
      <Footer />
    </>
  );
}
