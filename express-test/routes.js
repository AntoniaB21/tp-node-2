
app.get('/hello-world', (req,res) => {
    res.json({'message': 'hello-world'});
});

app.get('message/:message', (req,res) => {
    console.log(req.params.message);
    if (req.params.message.length < 20){
        res.status(200).json({message: req.params.message});
    } else {
        res.status(400).json({message: 'Bad request'});
    }
});

app.post('/infos/headers', (req,res) => {
    console.log(req);
    res.status(200).json({message:req.headers});
});

app.post('/infos/age', (req,res) => {
    console.log(req.body.birthdate);
    var dateParts = req.body.birthdate.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    console.log(dateObject.getFullYear());
    console.log(new Date().getFullYear() - dateObject.getFullYear());
    if (new Date().getFullYear() - dateObject.getFullYear() > 18){
        res.status(200).json({message: `Welcome ${req.body.firstname} !`})
    }else{
        res.status(403).json({message:'Forbidden'})
    }
});

app.get('/rick-roll', (req,res) => {
    res.redirect('https://youtu.be/dQw4w9WgXcQ');
});

app.delete('custom-header', (req,res) =>{
    res.setHeader({'message':'hello world'});
});