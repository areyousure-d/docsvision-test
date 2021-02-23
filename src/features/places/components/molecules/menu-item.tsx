import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentPlaceId } from "../../../redux/actions";

import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { RootStateType } from "../../../redux/reducers";

type Props = {
  placeId: string;
  title: string | null;
  children: string | JSX.Element | JSX.Element[];
};

export const MenuItem: FC<Props> = ({ placeId, title, children }) => {
  const dispatch = useDispatch();

  const currentPlaceId = useSelector(
    (state: RootStateType) => state.placeReducer.currentPlaceId
  );

  const isSelected = placeId === currentPlaceId;

  const onClick = () => {
    dispatch(setCurrentPlaceId(placeId));
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
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
      )}
      <AccordionPanel pr="0">{children}</AccordionPanel>
    </AccordionItem>
  );
};
