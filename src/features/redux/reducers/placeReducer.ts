import { NodeType } from "../../../lib/tree";
import {
  SET_PLACES_TREE,
  SET_INVENTORIES,
  SET_PLACES_LOADING,
  SET_PLACES_LOADING_ERROR,
  SET_INVENTORIES_LOADING,
  SET_INVENTORIES_LOADING_ERROR,
} from "../actions/actionTypes";
import { InventoryType } from "../actions/placeActions";

type PlaceReducerType = {
  placesTree: NodeType | null;
  isPlacesLoading: boolean;
  isPlacesLoadingError: boolean;
  inventories: InventoryType[];
  isInventoriesLoading: boolean;
  isInventoriesLoadingError: boolean;
};

const initialState: PlaceReducerType = {
  placesTree: null,
  isPlacesLoading: false,
  isPlacesLoadingError: false,
  inventories: [],
  isInventoriesLoading: false,
  isInventoriesLoadingError: false,
};

export const placeReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_PLACES_TREE:
      return { ...state, placesTree: action.payload };
    case SET_PLACES_LOADING:
      return { ...state, isPlacesLoading: action.payload };
    case SET_PLACES_LOADING_ERROR:
      return { ...state, isPlacesLoadingError: action.payload };
    case SET_INVENTORIES:
      return { ...state, inventories: action.payload };
    case SET_INVENTORIES_LOADING:
      return { ...state, isInventoriesLoading: action.payload };
    case SET_INVENTORIES_LOADING_ERROR:
      return { ...state, isInventoriesLoadingError: action.payload };
    default:
      return state;
  }
};