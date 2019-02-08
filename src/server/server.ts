import express from 'express'

import { HTTP_PORT } from './config'
import middlewares from './middleware'

const start = async () => {
    const app = express()

    app.use(middlewares)
    
    const server = app.listen(HTTP_PORT, () => {
        console.log(`Now listening on port ${HTTP_PORT}`)
    })

    server.on('error', console.error)
}

start().catch(console.error)