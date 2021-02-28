import { forward } from "effector";
import {
  $places,
  fetchPlacesFx,
  fetchInventoriesFx,
  addInventoryFx,
  deleteInventoryFx,
  editInventoryFx,
  setIsCurrentPlaceLast,
  setCurrentPlaceId,
} from "./";

// types
import { PlacesStore, Place, Inventory } from "../types";

import { Tree } from "../../../lib/tree";
import { addToTree } from "../../../lib/addToTree";

const updatePlacesTree = (state: PlacesStore, places: Place[]): PlacesStore => {
  const tree = new Tree();

  for (let i = 0; i < places.length; i++) {
    addToTree(tree, places, places[i]);
  }

  return { ...state, placesTree: tree.root };
};

const updateInventories = (
  state: PlacesStore,
  inventories: Inventory[]
): PlacesStore => {
  return { ...state, inventories: inventories };
};

const setIsCurrentPlaceLastReducer = (state: PlacesStore, isLast: boolean) => {
  return { ...state, isCurrentPlaceLast: isLast };
};

const setCurrentPlaceIdReducer = (
  state: PlacesStore,
  currentPlaceId: string
) => {
  return { ...state, currentPlaceId: currentPlaceId };
};

$places.on(fetchPlacesFx.doneData, updatePlacesTree);

$places.on(fetchInventoriesFx.doneData, updateInventories);

$places.on(setIsCurrentPlaceLast, setIsCurrentPlaceLastReducer);

$places.on(setCurrentPlaceId, setCurrentPlaceIdReducer);

forward({
  from: addInventoryFx.done,
  to: fetchInventoriesFx,
});

forward({
  from: deleteInventoryFx.done,
  to: fetchInventoriesFx,
});

forward({
  from: editInventoryFx.done,
  to: fetchInventoriesFx,
});
