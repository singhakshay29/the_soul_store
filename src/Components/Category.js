import { Container, Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Category({ c1, c2, c3 }) {
  return (
    <>
      <Container margin="0.5rem">
        <Box>
          <Image src={c1} className="categoryImage" alt="OVERSIZED T-SHIRTS" />
          <Image src={c2} className="categoryImage" alt="SHIRTS" />
          <Image src={c3} className="categoryImage" alt="T-SHIRTS" />
        </Box>
      </Container>
    </>
  );
}
