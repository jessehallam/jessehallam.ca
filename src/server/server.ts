import bodyParser from 'body-parser'
import express from 'express'
import fallback from 'connect-history-api-fallback'
import path from 'path'

import { HTTP_PORT } from './config'

import * as blog from './blog'

const app = express()

app.use(bodyParser.json())
blog.initialize(app, {
    path: path.resolve(__dirname, '../../_blog/_posts')
})

app.post('/api/mail', async (req, res) => {
    const Mailer = require('node-mailjet').connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);
    const mailRequest = Mailer.post('send')
        .request({
            FromEmail: 'contact@jessehallam.ca',
            FromName: 'JesseHallam.ca',
            Subject: 'Contact Form Submission',
            'Text-Part': `Name: ${req.body.name}
Phone: ${req.body.phone}
Message: ${req.body.message}`,
            Recipients: [
                { Email: 'jesse.colin.hallam@gmail.com' }
            ]
        });

    mailRequest.then(() => res.sendStatus(200), () => res.sendStatus(500));
})

app.use(fallback())
app.use(express.static(path.resolve(__dirname, '../../wwwroot')))

app.listen(HTTP_PORT, () => console.log(`Now listening on port ${HTTP_PORT}`))