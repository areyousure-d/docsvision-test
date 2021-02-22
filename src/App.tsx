import React, { useEffect, useState } from "react";

import { firebase } from "./firebase";

import { Tree, NodeType } from "./lib/tree";
import { addToTree } from "./lib/addToTree";
import { getInventories2 } from "./api/inventories";

function App() {
  const tree = new Tree();

  const [placeTree, setPlaceTree] = useState<any>();

  useEffect(() => {
    firebase
      .firestore()
      .collection("places")
      .get()
      .then((res) => {
        let docs = res.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          parts: x.data().parts && x.data().parts.map((x: any) => x.id),
        }));
        //console.info(docs);

        return docs;
      })
      .then((docs) => {
        for (let i = 0; i < docs.length; i++) {
          addToTree(tree, docs, docs[i]);
        }
        //console.log(tree);
      });
    //tree.add("main", "Главный корпус");
    //tree.add("main-left", "Левый корпус", "main");
    //tree.add("main-right", "Правый корпус", "main");

    //console.log(tree);
  }, []);

  useEffect(() => {
    (async () => {
      const inventories = await getInventories2();
      console.log(inventories);
    })();
  }, []);

  return <div>app</div>;
}

export default App;
