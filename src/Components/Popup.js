import { Text } from "@chakra-ui/react";
import React from "react";

export default function Popup({ message }) {
  return (
    <>
      <Text className="popup">{message}</Text>
    </>
  );
}
