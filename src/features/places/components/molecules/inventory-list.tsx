import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { UnorderedList } from "@chakra-ui/react";

import { InventoryListItem } from "../atoms";
import { LoadingSpinner } from "../../../../ui";
import { RootStateType } from "../../../redux/reducers";
import { InventoryType } from "../../../redux/actions/placeActions";
import { NodeType } from "../../../../lib/tree";
import { findChildrenIds } from "../../../../lib/placeTree-helpers";

export const InventoryList: FC = () => {
  const [currentPlaceChildrenIds, setCurrentPlaceChildrenIds] = useState<
    string[]
  >([]);

  const {
    inventories,
    currentPlaceId,
    placesTree,
    isInventoriesLoading,
  } = useSelector((state: RootStateType) => state.placeReducer);

  useEffect(() => {
    const ids = findChildrenIds(currentPlaceId, placesTree);
    setCurrentPlaceChildrenIds(ids);
  }, [currentPlaceId]);

  const filteredInventories = inventories.filter((inventory: InventoryType) => {
    if (currentPlaceId === "buildings") return true;
    return currentPlaceChildrenIds.includes(inventory.placeId);
  });

  if (isInventoriesLoading) return <LoadingSpinner />;

  return (
    <UnorderedList>
      {filteredInventories.map((inventory: InventoryType) => (
        <InventoryListItem
          key={inventory.id}
          name={inventory.name}
          count={inventory.count}
        />
      ))}
    </UnorderedList>
  );
};
