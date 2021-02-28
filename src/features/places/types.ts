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
  isPlacesLoading: boolean;
  isPlacesLoadingError: boolean;
  inventories: Inventory[];
  isInventoriesLoading: boolean;
  isInventoriesLoadingError: boolean;
};

export type Inventory = {
  id: string;
  name: string;
  count: number;
  placeId: string;
};
