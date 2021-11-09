// dependencies
const express = require('express')
let inspect = require('util').inspect;
let Busboy = require('busboy');

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

app.post('/createPost', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')

  var busboy = new Busboy({ headers: req.headers });
  let fields = {}

  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    file.on('data', function (data) {
      console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
    });
    file.on('end', function () {
      console.log('File [' + fieldname + '] Finished');
    });
  });

  busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
    fields[fieldname] = val
  });

  busboy.on('finish', function () {
    db.collection('posts').doc(fields.id).set({
      id: fields.id,
      caption: fields.caption,
      location: fields.location,
      date: fields.date,
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/han-quasagram.appspot.com/o/VkPf2b6.jpeg?alt=media&token=c82d6024-8f84-449c-89e5-f1d0c2218b16',
    })
    res.send('Done parsing form');
  });

  req.pipe(busboy);
})

app.listen(process.env.PORT || 3001)