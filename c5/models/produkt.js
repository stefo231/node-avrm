const mongoose = require('mongoose');

const Produkt = mongoose.model(
    'produkti',
    {
        ime: String,
        proizvoditel: String,
        cena: Number,
        tezina: Number,
        parcinja: Number
    },
    'produkti'
)

const readAll = () => {
    return new Promise((success, fail) => {
        Produkt.find({}, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
            //console.log(data)
        })
    })
}


const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new Produkt(data)

        p.save((err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    })

}

const removeItem = (id) => {
    return new Promise((success, fail) =>
        Produkt.deleteOne({_id: id}, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        }))
}

const updateItem = (id, data) => {
    return new Promise((success, fail) => {
        Produkt.update({ _id: id}, data, (err) => {
            if (err) {
                return fail(err)
            }
            return success()
        })
    })
}

module.exports = { 
    readAll,
    createNew,
    removeItem,
    updateItem
}

/*
// add to database
let p = new Produkt({
    "ime": "Milka so Oreo",
    "proizvoditel": "Mondelez",
    "cena": 30.0,
    "tezina": 300.0,
    "parcinja": 1
})

p.save((err) => {
    if (err) {
        console.log('Could not save to database')
        return
    }
});

// read from database
Produkt.find({}, (err, data) => {
    if (err) {
        console.log('Could not read from database')
        return
    }
    console.log(data)
})

//delete from database
Produkt.deleteOne({ _id: "5e42b3ba355e79c92e8231e1" }, (err) => {
    if (err) {
        console.log('Could not delete from database')
        return
    }
})

//update in database
Produkt.update({ ime: 'smoki' }, { cena: 15.0 }, (err) => {
    if (err) {
        console.log('Could not update in database')
        return
    }
})*/