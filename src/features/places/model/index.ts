import { createEffect, createEvent, createStore } from "effector";

import { getPlaces } from "../../../api/places";
import {
  getInventories,
  addInventory,
  deleteInventory,
  editInventory,
} from "../../../api/inventories";

import { PlacesStore } from "../types";

//store
// isCurrentPlaceLast - чтобы показать кнопки редактирования
export const $places = createStore<PlacesStore>({
  isCurrentPlaceLast: false,
  currentPlaceId: "",
  placesTree: { id: "buildings", name: "Все здания", parts: [] },
  inventories: [],
});

// EFFECTS
// todo: handle errors
export const fetchPlacesFx = createEffect(async () => {
  const places = await getPlaces();

  return places;
});

export const fetchInventoriesFx = createEffect(async () => {
  const inventories = await getInventories();

  return inventories;
});

export const addInventoryFx = createEffect(
  async ({
    name,
    count,
    placeId,
  }: {
    name: string;
    count: number;
    placeId: string;
  }) => {
    await addInventory(name, count, placeId);
  }
);

export const deleteInventoryFx = createEffect(
  async ({ inventoryId }: { inventoryId: string }) => {
    await deleteInventory(inventoryId);
  }
);

export const editInventoryFx = createEffect(
  async ({
    inventoryId,
    newInventory,
  }: {
    inventoryId: string;
    newInventory: { name?: string; count?: number };
  }) => {
    await editInventory(inventoryId, newInventory);
  }
);

// EVENTS
export const setCurrentPlaceId = createEvent<string>();

export const setIsCurrentPlaceLast = createEvent<boolean>();
