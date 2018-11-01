import { Router } from 'express'
import ua from 'universal-analytics'

import { UA_ACCOUNTID } from './config'

interface IUABody {
    eventaction?: string
    eventcat?: string
    eventlabel?: string
    eventval?: string | number

    pageview?: string
    pagetitle?: string
}

export default function middleware() {
    const router = Router()

    router.post('/_api/ua', (req, res) => {
        const visitor = ua(UA_ACCOUNTID)
        
        visitor.set('ds', 'app')
        visitor.set('cid', req.session.gid)
        visitor.set('uip', req.headers['x-forwarded-for'] || req.connection.remoteAddress)
        visitor.set('ua', req.headers['user-agent'])
        visitor.set('dr', req.headers['referrer'] || req.headers['referer'])
        visitor.set('dh', req.hostname)
        
        const body: IUABody = req.body

        if (body.pageview) {
            visitor.set('t', 'pageview')
            visitor.set('dp', body.pageview)
            if (body.pagetitle) {
                visitor.set('dt', body.pagetitle)
            }
        }

        if (body.eventcat) {
            visitor.set('ec', body.eventcat)
            visitor.set('ea', body.eventaction)
            if (body.eventlabel) {
                visitor.set('el', body.eventlabel)
            }
            if (body.eventval) {
                visitor.set('ev', parseInt(body.eventval.toString()))
            }
        }

        visitor.send((err, resp) => {
            if (err) console.error('UA error:', err)
            if (!err && resp) console.debug('UA response:', resp)
        })

        res.json({})
    })

    return router
}