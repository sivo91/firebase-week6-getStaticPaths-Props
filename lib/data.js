
import firebase from "./firebase";



export async function Entry() {
  let output = [];
 
  try {   
    //const snapshot = await firebase.collection("persons").get();
     const snapshot = await firebase.collection("persons").orderBy('title').get();
    
    snapshot.forEach(
      (doc) => {
        output.push({
            
           id: doc.id,
           data: doc.data()
          });
      });
  } catch(error) {
    console.error(error);
  }

  return output;
}


export async function getIds() {
  let output = [];
 
  try {
    const snapshot = await firebase.collection("persons").get();
    
    snapshot.forEach(
      (doc) => {

        output.push(
          { params: { id: doc.id } }
        ); }
    );
  } catch(error) {
    console.error(error);
  }

  return output;
}




export async function getData(id) {

  const doc = await firebase.collection("persons").doc(id).get();

  let output;
  if (!doc.empty) {
    output = { id: doc.id, data: doc.data() };
    
  } else {
    output = null;
  }

  return output;
}





