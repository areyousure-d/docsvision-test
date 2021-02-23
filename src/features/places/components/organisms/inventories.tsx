import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { Box, Heading, Flex, Button } from "@chakra-ui/react";

import { InventoryList, AddModal, EditModal, DeleteModal } from "../";
import { RootStateType } from "../../../redux/reducers";

export const Inventories: FC = () => {
  const { isCurrentPlaceLast, currentPlaceId } = useSelector(
    (state: RootStateType) => state.placeReducer
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [editModalId, setEditModalId] = useState<string>("");
  const [editModalName, setEditModalName] = useState<string>("");
  const [editModalCount, setEditModalCount] = useState<number>(0);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [deleteModalId, setDeleteModalId] = useState<string>("");
  const [deleteModalName, setDeleteModalName] = useState<string>("");

  const onEditModalOpen = (id: string, name: string, count: number) => {
    setEditModalId(id);
    setEditModalName(name);
    setEditModalCount(count);
    setIsEditModalOpen(true);
  };

  const onDeleteModalOpen = (id: string, name: string) => {
    setDeleteModalId(id);
    setDeleteModalName(name);
    setIsDeleteModalOpen(true);
  };

  return (
    <Box p={2}>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Heading size="md" textAlign="center">
          Имеющееся оборудование
        </Heading>
        {isCurrentPlaceLast && (
          <Button onClick={() => setIsAddModalOpen(true)} bg="green.300">
            Добавить оборудование
          </Button>
        )}
      </Flex>
      <Box pt={4}>
        <InventoryList
          onEditModalOpen={onEditModalOpen}
          onDeleteModalOpen={onDeleteModalOpen}
        />
      </Box>

      <AddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        currentPlaceId={currentPlaceId}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editModalId={editModalId}
        editModalName={editModalName}
        editModalCount={editModalCount}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        deleteModalId={deleteModalId}
        deleteModalName={deleteModalName}
      />
    </Box>
  );
};
