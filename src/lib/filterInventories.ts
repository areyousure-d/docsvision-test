import { Inventory } from "../features/places/types";

export function filterInventories(inventories: Inventory[]) {
  const filteredInventories = inventories.filter((inventory: Inventory) => {
    if (
      inventory.id === undefined ||
      inventory.name === undefined ||
      inventory.count === undefined ||
      inventory.placeId === undefined
    ) {
      return false;
    }
    return true;
  });

  return filteredInventories;
}
