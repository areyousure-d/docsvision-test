import React, { FC } from "react";
import { useDispatch } from "react-redux";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";

import { deleteInventory } from "../../../../api/inventories";
import { refetch } from "../../../redux/actions";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  deleteModalId: string;
  deleteModalName: string;
};

export const DeleteModal: FC<Props> = ({
  isOpen,
  onClose,
  deleteModalId,
  deleteModalName,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const onDelete = () => {
    deleteInventory(deleteModalId)
      .then(() => {
        dispatch(refetch());
        onClose();
        toast({
          title: "Удаление.",
          description: "Оборудование успешно удалено.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        onClose();
        toast({
          title: "Удаление.",
          description: "Не удалось удалить оборудование.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Удаление оборудования</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Вы уверены, что хотите удалить {deleteModalName}?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Отмена
          </Button>
          <Button colorScheme="red" onClick={onDelete}>
            Удалить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
