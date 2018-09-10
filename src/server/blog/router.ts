import { Router } from 'express'
import { BlogOptions } from '.';
import BlogEngine from './engine';

export function createRouter(options: BlogOptions) {
    const router = Router()
    const engine = new BlogEngine(options)

    router.get('/api/blog/posts', async (req, res) => {
        res.json(await engine.getPosts())
    })

    router.get('/api/blog/post/:id', async (req, res) => {
        res.json({ })
    })

    return router
}