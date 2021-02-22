import {
  SET_PLACES_TREE,
  SET_INVENTORIES,
  SET_PLACES_LOADING,
  SET_PLACES_LOADING_ERROR,
  SET_INVENTORIES_LOADING,
  SET_INVENTORIES_LOADING_ERROR,
} from "./actionTypes";
import { PlaceType, addToTree } from "../../../lib/addToTree";
import { NodeType, Tree } from "../../../lib/tree";
import { ThunkAction } from "redux-thunk";
import { RootStateType } from "../reducers";
import { Dispatch } from "redux";
import { getPlaces } from "../../../api/places";
import { getInventories } from "../../../api/inventories";

type PlacesTreeType = {
  type: typeof SET_PLACES_TREE;
  payload: NodeType;
};

type PlacesLoadingType = {
  type: typeof SET_PLACES_LOADING;
  payload: boolean;
};

type PlacesLoadingErrorType = {
  type: typeof SET_PLACES_LOADING_ERROR;
  payload: boolean;
};

export type InventoryType = {
  id: string;
  name: string;
  count: number;
  placeId: string;
};

type SetInventoriesType = {
  type: typeof SET_INVENTORIES;
  payload: InventoryType[];
};

type InventoriesLoadingType = {
  type: typeof SET_INVENTORIES_LOADING;
  payload: boolean;
};

type InventoriesLoadingErrorType = {
  type: typeof SET_INVENTORIES_LOADING_ERROR;
  payload: boolean;
};

type InventoriesType =
  | SetInventoriesType
  | InventoriesLoadingType
  | InventoriesLoadingErrorType;

type PlacesType = PlacesTreeType | PlacesLoadingType | PlacesLoadingErrorType;

export const setPlacesTree = (places: PlaceType[]): PlacesTreeType => {
  const tree = new Tree();

  for (let i = 0; i < places.length; i++) {
    addToTree(tree, places, places[i]);
  }

  return {
    type: SET_PLACES_TREE,
    payload: tree.root,
  };
};

export const setPlacesLoading = (isLoading: boolean): PlacesLoadingType => ({
  type: SET_PLACES_LOADING,
  payload: isLoading,
});

export const setPlacesLoadingError = (
  isError: boolean
): PlacesLoadingErrorType => ({
  type: SET_PLACES_LOADING_ERROR,
  payload: isError,
});

export const setInventories = (
  inventories: InventoryType[]
): SetInventoriesType => ({
  type: SET_INVENTORIES,
  payload: inventories,
});

export const setInventoriesLoading = (
  isLoading: boolean
): InventoriesLoadingType => ({
  type: SET_INVENTORIES_LOADING,
  payload: isLoading,
});

export const setInventoriesLoadingError = (
  isError: boolean
): InventoriesLoadingErrorType => ({
  type: SET_PLACES_LOADING_ERROR,
  payload: isError,
});

export const fetchPlaces = (): ThunkAction<
  void,
  RootStateType,
  unknown,
  PlacesType
> => (dispatch: Dispatch<PlacesType>) => {
  dispatch(setPlacesLoading(true));
  dispatch(setPlacesLoadingError(false));
  getPlaces()
    .then((places) => {
      dispatch(setPlacesTree(places));
      dispatch(setPlacesLoading(false));
    })
    .catch(() => dispatch(setPlacesLoadingError(true)));
};

export const fetchInventories = (): ThunkAction<
  void,
  RootStateType,
  unknown,
  InventoriesType
> => (dispatch: Dispatch<InventoriesType>) => {
  dispatch(setInventoriesLoading(true));
  dispatch(setInventoriesLoadingError(false));
  getInventories()
    .then((inventories) => {
      dispatch(setInventories(inventories));
      dispatch(setInventoriesLoading(false));
    })
    .catch(() => dispatch(setInventoriesLoadingError(true)));
};