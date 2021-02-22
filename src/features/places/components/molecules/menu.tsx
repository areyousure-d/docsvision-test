import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { Accordion } from "@chakra-ui/react";

import { RootStateType } from "../../../redux/reducers";

import { LoadingSpinner } from "../../../../ui";
import { NodeType } from "../../../../lib/tree";
import { MenuItem, EmptyMenuItem } from "./";

export const Menu: FC = () => {
  const {
    placesTree,
    isPlacesLoading,
    isPlacesLoadingError,
    currentPlaceId,
  } = useSelector((state: RootStateType) => state.placeReducer);

  if (isPlacesLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {placesTree && getMenuItems(placesTree)}
    </Accordion>
  );
};

function getMenuItems(node: NodeType): JSX.Element {
  const item =
    node.parts.length > 0 ? (
      <MenuItem key={node.id} placeId={node.id} title={node.name}>
        {node.parts.map((part: NodeType) => getMenuItems(part))}
      </MenuItem>
    ) : (
      <EmptyMenuItem key={node.id} id={node.id} name={node.name} />
    );
  return item;
}
