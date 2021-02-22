import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { setCurrentPlaceId } from "../../../redux/actions";

import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

type Props = {
  placeId: string;
  title: string | null;
  children: string | JSX.Element | JSX.Element[];
};

export const MenuItem: FC<Props> = ({ placeId, title, children }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setCurrentPlaceId(placeId));
  };

  return (
    <AccordionItem placeid={placeId} pr="0">
      {title && (
        <h2>
          <AccordionButton onClick={onClick}>
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
