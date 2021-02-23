import React, { ComponentType, FC } from "react";

import { Flex } from "@chakra-ui/react";

import { TwoColumns, Header, Footer } from "../";

type Props = {
  left: ComponentType | JSX.Element;
  right: ComponentType | JSX.Element;
};

export const BasicTemplate: FC<Props> = ({ left, right }) => {
  return (
    <Flex
      margin="0 auto"
      minH="100vh"
      maxW="1024px"
      minW="720px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <TwoColumns left={left} right={right} />
      <Footer />
    </Flex>
  );
};
