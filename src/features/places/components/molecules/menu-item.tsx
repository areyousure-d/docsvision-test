import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentPlaceId,
  setIsCurrentPlaceLast,
} from "../../../redux/actions";

import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import { RootStateType } from "../../../redux/reducers";
import { InventoryType } from "../../../redux/actions/placeActions";

import { findChildrenIds } from "../../../../lib/placeTree-helpers";

type Props = {
  placeId: string;
  title: string | null;
  children: string | JSX.Element | JSX.Element[];
};

export const MenuItem: FC<Props> = ({ placeId, title, children }) => {
  const dispatch = useDispatch();

  const [hasInventory, setHasInventory] = useState<boolean>(false);

  const { currentPlaceId, inventories, placesTree } = useSelector(
    (state: RootStateType) => state.placeReducer
  );

  useEffect(() => {
    const childrenIds = findChildrenIds(placeId, placesTree);

    let hasInventory = false;
    inventories.forEach((inventory: InventoryType) => {
      if (childrenIds.includes(inventory.placeId)) {
        hasInventory = true;
      }
    });

    setHasInventory(hasInventory);
  }, [inventories, placeId, placesTree]);

  const isSelected = placeId === currentPlaceId;

  const onClick = () => {
    dispatch(setCurrentPlaceId(placeId));
    dispatch(setIsCurrentPlaceLast(false));
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
