
import firebase from "../../lib/firebase";

export default async function handler (req, res) {

  try {

    const data = await firebase.collection('dogs').get()
    
    let output = []

    data.forEach((doc) => {
     output = { id:doc.id, data:doc.data() };
    })

    //console.log('data von: ' , output)
    res.statusCode=200
    res.setHeader('Content-Type', 'application/json')
    res.json({output}) 
  

  } catch (error) {
    console.log(error)
    res.status(500).end(error.message)
  }

  
}


















