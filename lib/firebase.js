
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(
  process.env.KEY
)

try { 
    admin.initializeApp(
      {
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.URL
      }
    )
} catch (err) {
  console.error('firebase error', err.stack)
}

export default admin.firestore()
 
















