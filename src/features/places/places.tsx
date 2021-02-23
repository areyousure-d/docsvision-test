import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlaces, fetchInventories } from "../redux/actions";

import { BasicTemplate } from "../../ui";
import { Menu, Inventories } from "./components";
import { RootStateType } from "../redux/reducers";

export const Places: FC = () => {
  const dispatch = useDispatch();
  const shouldRefetch = useSelector(
    (state: RootStateType) => state.placeReducer.shouldRefetch
  );

  useEffect(() => {
    dispatch(fetchPlaces());
    dispatch(fetchInventories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchInventories());
  }, [shouldRefetch, dispatch]);

  return <BasicTemplate left={<Menu />} right={<Inventories />} />;
};
