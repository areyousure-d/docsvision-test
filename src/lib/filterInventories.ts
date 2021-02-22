import { InventoryType } from "../features/redux/actions/placeActions";

export function filterInventories(inventories: InventoryType[]) {
  const filteredInventories = inventories.filter((inventory: InventoryType) => {
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
