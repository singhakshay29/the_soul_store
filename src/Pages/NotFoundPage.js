import React, { useEffect, useState } from "react";
import notfound from "../assets/notfound.avif";
import { Container, Flex } from "@chakra-ui/react";
import { fetchDataByType, service } from "../service";
import Card from "../Components/Card";

export default function NotFoundPage() {
  const [suggestions, setsuggestions] = useState(null);
  useEffect(() => {
    async function getData() {
      const searchData = await fetchDataByType("Shirt");
      const data = service(searchData);
      const { itemList } = data;
      console.log(itemList);
      setsuggestions(itemList);
    }

    getData();
  }, []);
  return (
    <Flex className="justify-center items-center mt-10 flex-col">
      <img src={notfound} className="w-56" alt="" />
      <Container className="categoryerror">
        We can't seem to find the page you are looking for
      </Container>
      <Container className="categoryerror2">You may also like:-</Container>
      <Flex style={{ flex: 1, flexWrap: "wrap" }}>
        {suggestions.map((item, index) => (
          <>
            <Card item={item} index={index} responsive={false} />
          </>
        ))}
      </Flex>
    </Flex>
  );
}
