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
app.post('/send', async (req, res, next) => {
    try {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;

        console.log('Received data:', req.body);

        var yourEmail = creds.EMAIL;
        var content = `name: ${name} \n email: ${email} \n message: ${message} `;
        var mail = {
            from: email,
            to: creds.EMAIL,
            subject: `New Portfolio Message from ${name}`,
            text: content,
        };

        // Send the primary email
        await transporter.sendMail(mail);
        console.log('Email sent successfully.');

        // Send auto-reply email
        await transporter.sendMail({
            from: yourEmail,
            to: email,
            subject: 'Message received',
            text: `Hi ${name}, \n\nThank you for sending me a message. I will get back to you soon\n\nKind Regards,\n${creds.YOURNAME}\n${creds.YOURSITE}\n\n\nMessage Details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p>Hi ${name},<br>Thank you for sending me a message. I will get back to you soon.<br><br>Best Regards,<br>${creds.YOURNAME}<br>${creds.YOURSITE}<br><br><br>Message Details<br>Name: ${name}<br>Email: ${email}<br>Message: ${message}</p>`,
        });
        console.log('Auto-reply email sent successfully.');

        res.json({
            status: 'success',
            autoReplyStatus: 'success'
        });
    } catch (err) {
        console.log('Error:', err);
        res.json({
            status: 'fail'
        });
    }
});
app.listen(5000, () => console.log(`backend is running on port ${5000}`));
