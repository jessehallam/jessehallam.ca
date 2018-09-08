import bodyParser from 'body-parser'
import express from 'express'
import fallback from 'connect-history-api-fallback'
import path from 'path'

import { HTTP_PORT } from './config'

const app = express()

app.use(bodyParser.json())
app.use(fallback())
app.use(express.static(path.resolve(__dirname, '../../wwwroot')))

app.listen(HTTP_PORT, () => console.log(`Now listening on port ${HTTP_PORT}`))