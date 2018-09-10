import express from 'express'
import * as blogRouter from './router'

export interface BlogOptions {
    path: string
}

export function initialize(app: express.Application, options: BlogOptions): void {
    const router = blogRouter.createRouter(options)
    app.use(router)
}