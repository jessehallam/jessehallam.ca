import bodyParser from 'body-parser'
import express from 'express'
import fallback from 'connect-history-api-fallback'
import path from 'path'

import { HTTP_PORT } from './config'

const app = express()

app.use(bodyParser.json())

app.post('/api/mail', async (req, res) => {
    const Mailer = require("node-mailjet").connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);
    const mailRequest = Mailer.post("send")
        .request({
            FromEmail: "contact@jessehallam.ca",
            FromName: "JesseHallam.ca",
            Subject: "Contact Form Submission",
            'Text-Part': `Name: ${req.body.name}
Phone: ${req.body.phone}
Message: ${req.body.message}`,
            Recipients: [
                { Email: "jesse.colin.hallam@gmail.com" }
            ]
        });

    mailRequest.then(() => res.sendStatus(200), () => res.sendStatus(500));
    // try {
    //     await sendContact({
    //         message: req.body.message,
    //         name: req.body.name,
    //         phone: req.body.phone
    //     })
    // } catch (err) {
    //     console.error(err)
    // } finally {
    //     res.json({})
    // }
})

app.use(fallback())
app.use(express.static(path.resolve(__dirname, '../../wwwroot')))

app.listen(HTTP_PORT, () => console.log(`Now listening on port ${HTTP_PORT}`))