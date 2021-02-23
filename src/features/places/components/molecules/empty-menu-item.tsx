import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentPlaceId } from "../../../redux/actions";

import { Box } from "@chakra-ui/react";
import { RootStateType } from "../../../redux/reducers";

type Props = {
  id: string;
  name: string;
};

export const EmptyMenuItem: FC<Props> = ({ id, name }) => {
  const dispatch = useDispatch();

  const currentPlaceId = useSelector(
    (state: RootStateType) => state.placeReducer.currentPlaceId
  );

  const onClick = () => {
    dispatch(setCurrentPlaceId(id));
  };

  const isSelected = id === currentPlaceId;

  return (
    <Box
      bg={isSelected ? "green.300" : undefined}
      onClick={onClick}
      flex="1"
      mb="10px"
      ml="10px"
      textAlign="left"
      p="5px"
      pl="10px"
      transition="background .2s"
      _hover={{
        cursor: "pointer",
        bg: isSelected ? "green.300" : "rgba(200, 200, 200, .5)",
        transition: "background .2s",
      }}
    >
      {name}
    </Box>
  );
};
