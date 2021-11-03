// dependencies
const express = require('express')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// config express
const app = express()

// config firebase
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// endpoint - posts
app.get('/posts', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  let posts = []
  db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
    snapshot.forEach((doc) => {
      posts.push(doc.data())
    });
    res.send(posts)
  })
})

app.listen(process.env.PORT || 3001)