import React, { FC } from "react";

import { Flex, Spinner } from "@chakra-ui/react";

export const LoadingSpinner: FC = () => (
  <Flex h="200px" alignItems="center" justifyContent="center">
    <Spinner />
  </Flex>
);
