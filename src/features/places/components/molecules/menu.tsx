import React, { FC, useEffect } from "react";
import { useStore } from "effector-react";

import { Accordion } from "@chakra-ui/react";

import { LoadingSpinner } from "../../../../ui";
import { NodeType } from "../../../../lib/tree";
import { MenuItem, EmptyMenuItem } from "./";

import { $places, fetchPlacesFx } from "../../model";

export const Menu: FC = () => {
  const { placesTree } = useStore($places);

  let isPlacesLoading = useStore(fetchPlacesFx.pending);

  useEffect(() => {
    fetchPlacesFx();
  }, []);

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
      node.id === "buildings" ? (
        <>{node.parts.map((part: NodeType) => getMenuItems(part))}</>
      ) : (
        <MenuItem key={node.id} placeId={node.id} title={node.name}>
          {node.parts.map((part: NodeType) => getMenuItems(part))}
        </MenuItem>
      )
    ) : (
      <EmptyMenuItem key={node.id} id={node.id} name={node.name} />
    );
  return item;
}
