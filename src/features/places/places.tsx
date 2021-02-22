import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPlaces, fetchInventories } from "../redux/actions";

import { BasicTemplate } from "../../ui";
import { Menu, InventoryList } from "./components";

export const Places: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces());
    dispatch(fetchInventories());
  }, []);

  return <BasicTemplate left={<Menu />} right={<InventoryList />} />;
};
