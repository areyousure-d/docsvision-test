import React, { FC } from "react";
import { useSelector } from "react-redux";

import { ListItem, Box } from "@chakra-ui/react";
import { ListButton } from "../../../../ui";
import { RootStateType } from "../../../redux/reducers";

type Props = {
  id: string;
  name: string;
  count: number;
  onEditModalOpen: (id: string, name: string, count: number) => void;
  onDeleteModalOpen: (id: string, name: string) => void;
};

export const InventoryListItem: FC<Props> = ({
  id,
  name,
  count,
  onEditModalOpen,
  onDeleteModalOpen,
}) => {
  const isCurrentPlaceLast = useSelector(
    (state: RootStateType) => state.placeReducer.isCurrentPlaceLast
  );

  return (
    <ListItem
      bg="blue.200"
      p={2}
      display="flex"
      minW="400px"
      maxW="1024px"
      justifyContent="space-between"
      mb="10px"
      flexWrap="wrap"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        minW="400px"
        flexWrap="wrap"
        pr="10px"
      >
        <span>
          Наименование: <span style={{ fontWeight: "bold" }}> {name}</span>{" "}
        </span>
        <span>
          Количество: <span style={{ fontWeight: "bold" }}> {count}</span>
        </span>
      </Box>
      {isCurrentPlaceLast ? (
        <Box display="flex" flexWrap="nowrap">
          <ListButton onClick={() => onEditModalOpen(id, name, count)}>
            Редактировать
          </ListButton>
          <ListButton onClick={() => onDeleteModalOpen(id, name)}>
            Удалить
          </ListButton>
        </Box>
      ) : null}
    </ListItem>
  );
};
