import React, { FC, useState, useEffect } from "react";
import { useStore } from "effector-react";

import { List } from "@chakra-ui/react";

import { InventoryListItem } from "../atoms";
import { LoadingSpinner } from "../../../../ui";
import { Inventory } from "../../types";
import { findChildrenIds } from "../../../../lib/placeTree-helpers";

import { $places, fetchInventoriesFx } from "../../model";

type Props = {
  onEditModalOpen: (id: string, name: string, count: number) => void;
  onDeleteModalOpen: (id: string, name: string) => void;
};

export const InventoryList: FC<Props> = ({
  onEditModalOpen,
  onDeleteModalOpen,
}) => {
  const [currentPlaceChildrenIds, setCurrentPlaceChildrenIds] = useState<
    string[]
  >([]);

  const { inventories, currentPlaceId, placesTree } = useStore($places);

  useEffect(() => {
    fetchInventoriesFx();
  }, []);

  useEffect(() => {
    const ids = findChildrenIds(currentPlaceId, placesTree);
    setCurrentPlaceChildrenIds(ids);
  }, [currentPlaceId, placesTree]);

  const filteredInventories = inventories.filter((inventory: Inventory) => {
    if (currentPlaceId === "buildings") return true;
    return currentPlaceChildrenIds.includes(inventory.placeId);
  });

  const isInventoriesLoading = useStore(fetchInventoriesFx.pending);

  if (isInventoriesLoading) return <LoadingSpinner />;

  return (
    <List>
      {filteredInventories.map((inventory: Inventory) => (
        <InventoryListItem
          key={inventory.id}
          id={inventory.id}
          name={inventory.name}
          count={inventory.count}
          onEditModalOpen={onEditModalOpen}
          onDeleteModalOpen={onDeleteModalOpen}
        />
      ))}
    </List>
  );
};
