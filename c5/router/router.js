/*var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/prodavnica';

/* GET home page *//*
router.get('/', function (req, res, next) {
    res.render('index')
});

router.get('/get-data', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('produkti').find()
        cursor.forEach(function (doc, err) {
            assert.equal(null, err)
            resultArray.push(doc)
        }, function () {
            db.close();
            res.render('produkti', { produkti: resultArray })
        });
    })
})

router.post('/insert', function (req, res, next) {
    var item = {
        imt: req.body.ime,
        proizvoditel: req.body.proizvoditel,
        cena: req.body.cena,
        tezina: req.body.tezina,
        parcinja: req.body.parcinja
    }

    mongo.connect(url, function (err, db) {
        assert.equal(null, err)
        db.collection('produkti').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log('Item inserted')
            db.close();
        })
    })
    req.redirect('/');
})

router.post('/update', function (req, res, next) {

})
router.post('/delete', function (req, res, next) {

})

module.exports = router;*/