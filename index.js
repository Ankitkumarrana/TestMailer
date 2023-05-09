const express = require('express');
const sendEmail =  require('./send-email');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.get('/', (req, res) => {
    res.send('success', 200);
});

router.get('/testhtml', (req, res) => {
    res.sendFile(__dirname + '/documents/testhtml.html');
});

app.post('/sendemail', sendEmail.mail);

app.listen(process.env.PORT || process.env.primaryPort, () => {
    console.log('Now listening on port: ' + process.env.PORT);
});