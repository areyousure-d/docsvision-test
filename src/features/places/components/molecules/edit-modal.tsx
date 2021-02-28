import React, { FC, FormEvent, useState, useEffect } from "react";
import { useStore } from "effector-react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

import { ValidationAlert } from "../../../../ui";

import { editInventoryFx } from "../../model";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  editModalId: string;
  editModalName: string;
  editModalCount: number;
};

export const EditModal: FC<Props> = ({
  isOpen,
  onClose,
  editModalId,
  editModalName,
  editModalCount,
}) => {
  const toast = useToast();

  const [name, setName] = useState<string>(editModalName);
  const [nameRequiredError, setNameRequiredError] = useState<boolean>(false);
  const [count, setCount] = useState<number>(editModalCount);
  const [countRequiredError, setCountRequiredError] = useState<boolean>(false);
  const [negativeCountError, setNegativeCountError] = useState<boolean>(false);
  const [tooBigCountError, setTooBigCountError] = useState<boolean>(false);

  useEffect(() => {
    setName(editModalName);
    setCount(editModalCount);
  }, [editModalName, editModalCount]);

  const onNameChange = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    setNameRequiredError(false);
  };

  const onCountChange = (e: FormEvent<HTMLInputElement>) => {
    setCount(Number(e.currentTarget.value));
    setCountRequiredError(false);
    setNegativeCountError(false);
    setTooBigCountError(false);
  };

  const onSave = () => {
    if (name === "") {
      setNameRequiredError(true);
    }
    if (count === 0) {
      setCountRequiredError(true);
    }
    if (count < 0) {
      setNegativeCountError(true);
    }
    if (count > 1000) {
      setTooBigCountError(true);
    }
    if (name === "" || count === 0 || count < 0 || count > 1000) {
      return;
    }

    const newInventory = {
      name,
      count,
    };

    editInventoryFx({ inventoryId: editModalId, newInventory: newInventory });

    const unwatchDone = editInventoryFx.done.watch(() => {
      onClose();
      toast({
        title: "Редактирование.",
        description: "Оборудование успешно отредактировано.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      unwatchDone();
    });

    const unwatchFail = editInventoryFx.fail.watch(() => {
      onClose();
      toast({
        title: "Редактирование.",
        description: "Не удалось отредактировать оборудование.",
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
        <ModalHeader>Изменить оборудование</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Название</FormLabel>
            <Input
              placeholder="Название"
              onChange={onNameChange}
              value={name}
            />
            {nameRequiredError && (
              <ValidationAlert
                title="Ошибка!"
                text="Необходимо ввести название!"
                onClose={() => setNameRequiredError(false)}
              />
            )}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Количество</FormLabel>
            <Input
              type="number"
              placeholder="Количество"
              onChange={onCountChange}
              value={count.toString()}
            />
            {countRequiredError && (
              <ValidationAlert
                title="Ошибка!"
                text="Необходимо ввести количество!"
                onClose={() => setCountRequiredError(false)}
              />
            )}
            {negativeCountError && (
              <ValidationAlert
                title="Ошибка!"
                text="Не может быть отрицательным."
                onClose={() => setNegativeCountError(false)}
              />
            )}
            {tooBigCountError && (
              <ValidationAlert
                title="Ошибка!"
                text="Слишком много."
                onClose={() => setTooBigCountError(false)}
              />
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onSave}
            isLoading={useStore(editInventoryFx.pending)}
            loadingText="Изменение"
          >
            Изменить
          </Button>
          <Button onClick={onClose}>Отмена</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
