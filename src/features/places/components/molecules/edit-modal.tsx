import React, { FC, FormEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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

import { editInventory } from "../../../../api/inventories";
import { refetch } from "../../../redux/actions";

import { ValidationAlert } from "../../../../ui";

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
  const dispatch = useDispatch();
  const toast = useToast();

  const [name, setName] = useState<string>(editModalName);
  const [nameRequiredError, setNameRequiredError] = useState<boolean>(false);
  const [count, setCount] = useState<number>(editModalCount);
  const [countRequiredError, setCountRequiredError] = useState<boolean>(false);

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
  };

  const onSave = () => {
    if (name === "") {
      setNameRequiredError(true);
    }
    if (count === 0) {
      setCountRequiredError(true);
    }
    if (name === "" || count === 0) {
      return;
    }

    const newInventory = {
      name,
      count,
    };

    editInventory(editModalId, newInventory)
      .then(() => {
        dispatch(refetch());
        onClose();
        toast({
          title: "Редактирование.",
          description: "Оборудование успешно отредактировано.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        onClose();
        toast({
          title: "Редактирование.",
          description: "Не удалось отредактировать оборудование.",
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
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSave}>
            Изменить
          </Button>
          <Button onClick={onClose}>Отмена</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
