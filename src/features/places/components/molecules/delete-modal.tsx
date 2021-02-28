import React, { FC } from "react";
import { useStore } from "effector-react";

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

import { deleteInventoryFx } from "../../model";

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
  const toast = useToast();

  const onDelete = () => {
    deleteInventoryFx({ inventoryId: deleteModalId });

    const unwatchDone = deleteInventoryFx.done.watch(() => {
      onClose();
      toast({
        title: "Удаление.",
        description: "Оборудование успешно удалено.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      unwatchDone();
    });

    const unwatchFail = deleteInventoryFx.fail.watch(() => {
      onClose();
      toast({
        title: "Удаление.",
        description: "Не удалось удалить оборудование.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      unwatchFail();
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
          <Button
            colorScheme="red"
            onClick={onDelete}
            isLoading={useStore(deleteInventoryFx.pending)}
            loadingText="Удаление"
          >
            Удалить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
