const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: process.env.service,
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
    host: process.env.host,
    port: process.env.hostPort,
    tls: {
        rejectUnauthorized: true,
        minVersion: process.env.minVersion
    },
    
});

const SendEmail = {
    mail(req, res) {
        console.log(req.body);
        transporter.sendMail({
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text, // plain text body
            //html: "", // html body
        }).then(info => {
            res.status(200).send(info);
        }).catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
    },
}
module.exports = SendEmail;