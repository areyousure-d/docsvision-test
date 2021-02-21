import React, { useEffect } from "react";

import { firebase } from "./firebase";

function App() {
  useEffect(() => {
    firebase
      .firestore()
      .collection("places")
      .get()
      .then((res) => {
        let docs = res.docs.map((x) => ({
          id: x.id,
          data: x.data() && x.data(),
          parts: x.data().parts && x.data().parts.map((x: any) => x.id),
        }));
        console.info(docs);
      });
  }, []);

  return <div>app</div>;
}

export default App;
