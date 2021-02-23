import { NodeType } from "./tree";

export function findChildrenIds(currentId: string, root: NodeType): string[] {
  // const isParent = false;
  const ids: string[] = [];

  const targetNode = findBFS(currentId, root);

  traverseBFS(targetNode, (node) => {
    ids.push(node.id);
  });

  return ids;
}

export function findBFS(id: string, root: NodeType): NodeType | null {
  let _node = null;

  traverseBFS(root, (node: NodeType): void => {
    if (node.id === id) {
      _node = node;
    }
  });

  return _node;
}

export function traverseBFS(
  target: NodeType | null,
  cb: (node: NodeType) => void
): void {
  if (target === null) return;

  const queue = [target];

  if (cb)
    while (queue.length) {
      const node = queue[0];
      queue.shift();

      cb(node);

      for (const part of node.parts) {
        queue.push(part);
      }
    }
}
