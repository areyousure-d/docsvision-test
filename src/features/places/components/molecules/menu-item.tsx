import React, { FC, useState, useEffect } from "react";
import { useStore } from "effector-react";

import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import { Inventory } from "../../types";

import { findChildrenIds } from "../../../../lib/placeTree-helpers";

import { $places, setCurrentPlaceId, setIsCurrentPlaceLast } from "../../model";

type Props = {
  placeId: string;
  title: string | null;
  children: string | JSX.Element | JSX.Element[];
};

export const MenuItem: FC<Props> = ({ placeId, title, children }) => {
  const [hasInventory, setHasInventory] = useState<boolean>(false);

  const { currentPlaceId, inventories, placesTree } = useStore($places);
  const [isSelected, setIsSelected] = useState<boolean>(
    placeId === currentPlaceId
  );

  useEffect(() => {
    const childrenIds = findChildrenIds(placeId, placesTree);

    let hasInventory = false;
    inventories.forEach((inventory: Inventory) => {
      if (childrenIds.includes(inventory.placeId)) {
        hasInventory = true;
      }
    });

    setHasInventory(hasInventory);
  }, [inventories, placeId, placesTree]);

  useEffect(() => {
    setIsSelected(currentPlaceId === placeId);
  }, [currentPlaceId, placeId]);

  const onClick = () => {
    setCurrentPlaceId(placeId);
    setIsCurrentPlaceLast(false);
  };

  return (
    <AccordionItem placeid={placeId} pr="0">
      {title && (
        <h2>
          <AccordionButton
            onClick={onClick}
            bg={isSelected ? "green.300" : undefined}
            transition="background .2s"
            _hover={{
              cursor: "pointer",
              bg: isSelected ? "green.300" : "rgba(200, 200, 200, .5)",
              transition: "background .2s",
            }}
          >
            <Box flex="1" textAlign="left" p="0" pl="5px">
              {title} {hasInventory && <CheckIcon color="green.800" />}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
      )}
      <AccordionPanel pr="0">{children}</AccordionPanel>
    </AccordionItem>
  );
};
