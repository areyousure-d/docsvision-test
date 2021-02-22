import { ComponentType, FC } from "react";

import { Flex, Box } from "@chakra-ui/react";

type Props = {
  left: ComponentType | JSX.Element;
  right: ComponentType | JSX.Element;
};

export const TwoColumns: FC<Props> = ({ left, right }) => {
  return (
    <Flex flex="auto">
      <Box flex="30%" minW="300px" bg="green.50">
        {left}
      </Box>
      <Box flex="70%" bg="blue.50">
        {right}
      </Box>
    </Flex>
  );
};
