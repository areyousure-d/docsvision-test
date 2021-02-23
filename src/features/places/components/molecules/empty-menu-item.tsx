import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentPlaceId,
  setIsCurrentPlaceLast,
} from "../../../redux/actions";
import { CheckIcon } from "@chakra-ui/icons";

import { Box } from "@chakra-ui/react";
import { RootStateType } from "../../../redux/reducers";
import { InventoryType } from "../../../redux/actions/placeActions";

type Props = {
  id: string;
  name: string;
};

export const EmptyMenuItem: FC<Props> = ({ id, name }) => {
  const dispatch = useDispatch();

  const [hasInventory, setHasInventory] = useState<boolean>(false);

  const currentPlaceId = useSelector(
    (state: RootStateType) => state.placeReducer.currentPlaceId
  );

  const inventories = useSelector(
    (state: RootStateType) => state.placeReducer.inventories
  );

  useEffect(() => {
    let hasInventory = false;
    inventories.forEach((inventory: InventoryType) => {
      if (inventory.placeId === id) {
        hasInventory = true;
      }
    });

    setHasInventory(hasInventory);
  }, [inventories, id]);

  const onClick = () => {
    dispatch(setCurrentPlaceId(id));
    dispatch(setIsCurrentPlaceLast(true));
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
      {name} {hasInventory && <CheckIcon color="green.800" />}
    </Box>
  );
};
