import express from 'express'

import { HTTP_PORT } from './config'
import middlewares from './middleware'

const app = express()

app.use(middlewares)
app.listen(HTTP_PORT, () => console.log(`Now listening on port ${HTTP_PORT}`))