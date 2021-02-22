import React, { FC } from "react";

import { ListItem, Button } from "@chakra-ui/react";

type Props = {
  name: string;
  count: number;
};

export const InventoryListItem: FC<Props> = ({ name, count }) => {
  return (
    <ListItem>
      Наименование: {name}, Количество: {count},<Button>Редактировать</Button>
      <Button>Удалить</Button>
    </ListItem>
  );
};
