const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    ime: { type: String, required: true },
    proizvoditel: { type: String, required: true },
    cena: { type: Number, required: true },
    tezina: { type: Number, required: true },
    parcinja: { type: Number, required: true },
}, { collection: 'produkti' })

const Produkt = mongoose.model('produkti', productSchema)

const readAll = () => {
    return new Promise((success, fail) => {
        Produkt.find({}, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        })
    })
}

const reader = (req, res) => {
    readAll()
        .then(data => {
            res.render('produkti', { produkti: data })
        })
        .catch(err => {
            console.log('Error has occured while reading from DB')
            res.status(500).send('Could not read from DB')
            return
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

const creator = (req, res) => {
    var item = {
        ime: req.body.ime,
        proizvoditel: req.body.proizvoditel,
        cena: req.body.cena,
        tezina: req.body.tezina,
        parcinja: req.body.parcinja
    }
    createNew(item)
    res.redirect('/')
}

const removeItem = (id) => {
    return new Promise((success, fail) =>
        Produkt.deleteOne({ _id: id }, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        }))
}

const deleter = (req, res) => {
    var id = req.body.id;
    removeItem(id.str)
    res.redirect('/')
}

const updateItem = (id, data) => {
    return new Promise((success, fail) => {
        Produkt.updateOne({ _id: id }, data, (err) => {
            if (err) {
                return fail(err)
            }
            return success()
        })
    })
}

const updater = (res, req) => {
    var id = req.param.id

    Produkt.findById(id, (err, doc) => {
        if (err) {
            console.log('error, no entry found')
        }
        doc.ime = req.body.ime,
            doc.proizvoditel = req.body.proizvoditel,
            doc.cena = req.body.cena,
            doc.tezina = req.body.tezina,
            doc.parcinja = req.body.parcinja
        doc.save();
    })
    res.redirect('/')
}

module.exports = {
    readAll,
    createNew,
    removeItem,
    updateItem,
    reader,
    creator,
    deleter,
    updater
}
