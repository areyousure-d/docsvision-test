import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { setCurrentPlaceId } from "../../../redux/actions";

import { Box } from "@chakra-ui/react";

type Props = {
  id: string;
  name: string;
};

export const EmptyMenuItem: FC<Props> = ({ id, name }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setCurrentPlaceId(id));
  };

  return (
    <Box onClick={onClick} flex="1" m="10px" textAlign="left" p="0" pl="5px">
      {name}
    </Box>
  );
};
