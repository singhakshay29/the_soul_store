import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_POPOVER } from "../action";

export default function Popup() {
  const dispatch = useDispatch();
  const { message, isOpen } = useSelector((state) => state.app);
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        dispatch(CLOSE_POPOVER());
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, isOpen]);
  return <>{isOpen && <Text className="popup">{message}</Text>}</>;
}
