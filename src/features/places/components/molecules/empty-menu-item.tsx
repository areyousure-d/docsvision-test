import React, { FC, useState, useEffect } from "react";
import { useStore } from "effector-react";

import { CheckIcon } from "@chakra-ui/icons";

import { Box } from "@chakra-ui/react";
import { Inventory } from "../../types";

import { $places, setCurrentPlaceId, setIsCurrentPlaceLast } from "../../model";

type Props = {
  id: string;
  name: string;
};

export const EmptyMenuItem: FC<Props> = ({ id, name }) => {
  const [hasInventory, setHasInventory] = useState<boolean>(false);

  const { currentPlaceId, inventories } = useStore($places);
  const [isSelected, setIsSelected] = useState<boolean>(currentPlaceId === id);

  useEffect(() => {
    let hasInventory = false;
    inventories.forEach((inventory: Inventory) => {
      if (inventory.placeId === id) {
        hasInventory = true;
      }
    });

    setHasInventory(hasInventory);
  }, [inventories, id]);

  useEffect(() => {
    setIsSelected(currentPlaceId === id);
  }, [currentPlaceId, id]);

  const onClick = () => {
    setCurrentPlaceId(id);
    setIsCurrentPlaceLast(true);
  };

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
