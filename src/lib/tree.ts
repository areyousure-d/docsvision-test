export type NodeType = {
  id: string;
  name: string;
  parts: NodeType[];
};

interface INode {
  id: string;
  name: string;
  parts: NodeType[];
}

export interface ITree {
  root: NodeType;
  add: (id: string, name: string, toNodeId?: string) => void;
  findBFS: (id: string) => NodeType | null;
  traverseBFS: (cb: any) => void;
}

class Node implements INode {
  id: string;
  name: string;
  parts: [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.parts = [];
  }
}

export class Tree implements ITree {
  root: NodeType;

  constructor() {
    this.root = { id: "buildings", name: "Все здания", parts: [] };
  }

  add(id: string, name: string, toNodeId?: string): void {
    const node = new Node(id, name);

    const parent = toNodeId
      ? this.findBFS(toNodeId)
      : this.findBFS("buildings");

    if (parent) {
      parent.parts.push(node);
    }
  }

  findBFS(id: string): NodeType | null {
    const queue = [this.root];
    let _node = null;

    this.traverseBFS((node: NodeType): void => {
      if (node.id === id) {
        _node = node;
      }
    });

    return _node;
  }

  traverseBFS(cb: (node: NodeType) => void): void {
    const queue = [this.root];

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
}
