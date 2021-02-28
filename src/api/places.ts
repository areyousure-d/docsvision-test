import { firebase } from "../firebase";

export const getPlaces = async () => {
  const db = firebase.firestore();
  const data = await db.collection("places").get();

  const places = data.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    parts: doc.data().parts && doc.data().parts.map((part: any) => part.id),
  }));

  return places;
};
