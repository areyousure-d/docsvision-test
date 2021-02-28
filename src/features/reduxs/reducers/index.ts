import { combineReducers } from "redux";

import { placeReducer } from "./placeReducer";

export const rootReducer = combineReducers({
  placeReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
