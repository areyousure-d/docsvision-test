import { ITree } from "./tree";

export type PlaceType = {
  id: string;
  name: string;
  parts: string[];
};

export function addToTree(
  tree: ITree,
  docs: PlaceType[],
  doc: PlaceType,
  toNodeId?: string
) {
  if (tree.findBFS(doc.id)) {
    //console.log("tree.findBFS(doc.id)", tree.findBFS(doc.id));
    return;
  }
  tree.add(doc.id, doc.name, toNodeId);

  const currentId = doc.id;

  if (doc.parts && doc.parts.length > 0) {
    //console.log("doc.parts: ", doc.parts);
    doc.parts.forEach((id: string) => {
      const index = docs.findIndex((doc: PlaceType) => doc.id === id);
      const currentDoc = docs[index];
      //console.log("currentDoc: ", currentDoc);
      //console.log("id:", id);
      //console.log("currentId: ", currentId);
      addToTree(tree, docs, currentDoc, currentId);
    });
  }
}
