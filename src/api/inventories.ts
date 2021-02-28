import { firebase } from "../firebase";
import { filterInventories } from "../lib/filterInventories";

export const getInventories = async () => {
  const db = firebase.firestore();
  const data = await db.collection("inventory").get();

  const inventories = data.docs.map((doc) => ({
    id: doc.id && doc.id,
    name: doc.data && doc.data().name,
    count: doc.data && doc.data().count,
    placeId: doc.data && doc.data().place && doc.data().place.id,
  }));

  return filterInventories(inventories);
};

export const addInventory = async (
  name: string,
  count: number,
  placeId: string
) => {
  const db = firebase.firestore();
  const response = await db
    .collection("inventory")
    .doc()
    .set({
      name,
      count,
      place: db.collection("places").doc(placeId),
    });

  return response;
};

export const deleteInventory = async (inventoryId: string) => {
  const db = firebase.firestore();
  const response = await db.collection("inventory").doc(inventoryId).delete();

  return response;
};

export const editInventory = async (
  inventoryId: string,
  newInventory: { name?: string; count?: number }
) => {
  const db = firebase.firestore();
  const response = await db
    .collection("inventory")
    .doc(inventoryId)
    .update({ ...newInventory });

  return response;
};
