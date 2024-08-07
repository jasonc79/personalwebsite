import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import * as creds from './config.js';
var router = express.Router();
var transport = {
    host: creds.HOST,
    port: creds.MAILPORT,
    secure: true,
    auth: {
        user: creds.USER,
        pass: creds.PASS,
    },
    from: creds.EMAIL,
};
// Create nodemailer transporter to accept messages
var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('testing...');
});
app.post('/send', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    console.log('Received data:', req.body);
    var senderEmail = `${name} <${creds.EMAIL}>`;
    var yourEmail = `${creds.YOURNAME} <${creds.EMAIL}>`;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `;
    var mail = {
        from: senderEmail,
        to: creds.EMAIL,
        subject: `New Portfolio Message from ${name}`,
        text: content,
    };
    // Delivers the message to my email address
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log('Error sending email', err)
            res.json({
                status: 'fail',
            });
        } else {
            console.log('Email sent:', data)
            res.json({
                status: 'success',
            });
            // If successful, send auto reply email
            transporter.sendMail(
            {
                from: yourEmail,
                to: email,
                subject: 'Message received',
                text: `Hi ${name}, \nThank you for sending me a message. I will get back to you soon\n\nKind Regards,\n${creds.YOURNAME}\n${cred.YOURSITE}\n\n\nMessage Details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
                html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${creds.YOURNAME}<br>${creds.YOURSITE}<br><br><br>Message Details<br>Name: ${name}<br> Email: ${email}<br> Message: ${message}</p>`,
            }),
            function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Message sent: ' + info.response);
                }
            }
        }
    });
});
app.listen(5000, () => console.log(`backend is running on port ${5000}`));
