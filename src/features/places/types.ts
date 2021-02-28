export type TreeNode = {
  id: string;
  name: string;
  parts: TreeNode[];
};

export type Place = {
  id: string;
  name: string;
  parts: string[];
};

export type PlacesStore = {
  isCurrentPlaceLast: boolean;
  currentPlaceId: string;
  placesTree: TreeNode;
  inventories: Inventory[];
};

export type Inventory = {
  id: string;
  name: string;
  count: number;
  placeId: string;
};
