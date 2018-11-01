import bodyParser from 'body-parser'
import express from 'express'
import expressSession from 'express-session'
import fallback from 'connect-history-api-fallback'
import path from 'path'
import { v4 } from 'uuid'

import { HTTP_PORT } from './config'

import universalAnalytics from './ua'

const app = express()

app.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'aaaa'
}))
app.use((req, res, next) => {
    if (!req.session.gid) {
        req.session.gid = v4()
    }
    next()
})
app.use(bodyParser.json())
app.use(universalAnalytics())

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