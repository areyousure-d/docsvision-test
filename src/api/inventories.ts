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

/*
export const getInventories2 = async () => {
  const db = firebase.firestore();
  const data = await db.collection("inventory").get();

  const inventories = data.docs.map((doc) => ({
    id: doc.id && doc.id,
    data: doc.data && doc.data(),
    name: doc.data && doc.data().name,
    count: doc.data && doc.data().count,
    placeId: doc.data && doc.data().place && doc.data().place.id,
  }));

  return inventories;
};
*/
