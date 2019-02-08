import bodyParser from 'body-parser'
import express from 'express'
import expressSession from 'express-session'
import fallback from 'connect-history-api-fallback'
import path from 'path'
import { v4 } from 'uuid'

import * as config from './config'
import universalAnalytics from './ua'

const router = express.Router()

/*
 *  Add Express Session for managing google tokens.
 */
router.use(expressSession({
    resave: true,
    saveUninitialized: true,
    secret: config.SECRET
}))

/*
 *  Assign a unique id to each user for analytics.
 */
router.use((req, res, next) => {
    if (!req.session.gid) {
        req.session.gid = v4()
    }
    next()
})

/*
 *  Parse JSON bodies.
 */
router.use(bodyParser.json())

/*
 *  Handle UA.
 */
router.use(universalAnalytics())

/*
 *  Handle Contact Form.
 */
router.post('/api/mail', async (req, res) => {
    // Mail jet is fussy about being imported with TS, so require() it.
    const Mailer = require('node-mailjet')
        .connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);

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
        })

    mailRequest.then(() => res.sendStatus(200), () => res.sendStatus(500));
});

/*
 *  Handle 404s by loading the index page (support for react router).
 */
router.use(fallback())

/*
 *  Handle static files.
 */
router.use(express.static(path.resolve(__dirname, '../../wwwroot')))

export default router