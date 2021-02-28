import React, { FC } from "react";

import { BasicTemplate } from "../../ui";
import { Menu, Inventories } from "./components";

import "./model/init";

export const Places: FC = () => {
  return <BasicTemplate left={<Menu />} right={<Inventories />} />;
};
