import React, { FC, FormEvent, useState } from "react";
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

import { addInventory } from "../../../../api/inventories";
import { refetch } from "../../../redux/actions";

import { ValidationAlert } from "../../../../ui";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  currentPlaceId: string;
};

export const AddModal: FC<Props> = ({ isOpen, onClose, currentPlaceId }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [name, setName] = useState<string>("");
  const [nameRequiredError, setNameRequiredError] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [countRequiredError, setCountRequiredError] = useState<boolean>(false);

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

    addInventory(name, count, currentPlaceId)
      .then(() => {
        setCount(0);
        setName("");
        dispatch(refetch());
        onClose();
        toast({
          title: "Добавление.",
          description: "Оборудование успешно добавлено.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        onClose();
        toast({
          title: "Добавление.",
          description: "Не удалось добавить оборудование.",
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
        <ModalHeader>Добавить оборудование</ModalHeader>
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
            Добавить
          </Button>
          <Button onClick={onClose}>Отмена</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
