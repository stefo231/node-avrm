const db = require('./bootstrap/db');
const produkt = require('./models/produkt');

db.initDB();
//produkt.readAll();


produkt.createNew({
    "ime": "Milka so Jagoda",
    "proizvoditel": "Mondelez",
    "cena": 50,
    "tezina": 500,
    "parcinja": 1,
})
    .then(() => {
        return produkt.updateItem("5e42c3cd05654438a4a0641e", { ime: "milka so lesnici" })
    })
    .then(() => {
        return produkt.removeItem("5e42b362355e79c92e82186c")
    })
    .then(() => {
        return produkt.readAll()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })