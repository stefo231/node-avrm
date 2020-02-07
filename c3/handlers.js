const index = (req, res) =>{
    res.send('ok');
}

const ime = (req, res) =>{
    res.send('pero');
}

const greetings = (req, res) =>{ // ime e promenliva
    res.send(req.params.ime);
}

const calc1 = (req, res) =>{ // ime e promenliva
    let ress = 0;
    switch(req.params.func){
        case 'add':
            ress = Number(req.params.x) + Number(req.params.y)
        break;
        case 'sub':
            ress = Number(req.params.x) - Number(req.params.y)
            break;
        case 'mul':
            ress = Number(req.params.x) * Number(req.params.y)
            break;
        case 'div':
            ress = Number(req.params.x) / Number(req.params.y)
            break;
        default:
            ress = console.log('oops, smth wenth wrong!')
    }
    res.send('' + ress)
}

const values = (req, res) =>{
    res.send(`response: ${req.body.age}`)
};

const calc2 = (req, res) =>{
    let ress = 0;
    switch(req.body.func){
        case 'add':
            ress = Number(req.body.x) + Number(req.body.y)
        break;
        case 'sub':
            ress = Number(req.body.x) - Number(req.body.y)
            break;
        case 'mul':
            ress = Number(req.body.x) * Number(req.body.y)
            break;
        case 'div':
            ress = Number(req.body.x) / Number(req.body.y)
            break;
        default:
            ress = console.log('oops, smth wenth wrong!')
    }
    res.send('' + ress)
}



module.exports = {
    index,
    ime,
    greetings,
    calc1,
    values,
    calc2
}