const express = require('express')
const router = express.Router();
const {MongoClient} = require('mongodb')
const url='mongodb://localhost:27017'
const client = new MongoClient(url);

async function getData (){
    let result  = await client.connect();
    let data = result.db('traininfo');
    let collection  = data.collection('traininfos');
    let response = await collection.find({ $and: [{"indore junction": "indore junction"}, {"maksi junction":"maksi junction"} ]}).toArray();
    console.log(response);
}

router.post('/getdata'){
    
}
