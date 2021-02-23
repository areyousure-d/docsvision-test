import React, { FC } from "react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

type Props = {
  title?: string;
  text?: string;
  onClose?: () => void;
};

export const ValidationAlert: FC<Props> = ({ title, text, onClose }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{text}</AlertDescription>
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={onClose}
      />
    </Alert>
  );
};
