import { BlogOptions } from '.'
import * as fsys from './fsys'
import path from 'path'
import Post from './post';

export interface PostInfo {
    date: Date
    fileName: string
    title: string
}

export interface PostQuery {
    per_page?: number
    posts?: number
}

class BlogEngine {
    private options: BlogOptions

    constructor(options: BlogOptions) {
        this.options = options
    }

    async getPosts() {
        const aggregator = new PostAggregator(this.options.path)
        return Promise.resolve(aggregator.posts())
    }
}

class PostAggregator {
    private root: string

    constructor(root: string) {
        this.root = root
    }

    async posts() {
        const files = fsys.getFilesRecursive(this.root)
        const posts: Post[] = []

        files.forEach(fileName => {
            const file = path.basename(fileName)
            if (!/\.md$/.test(file)) return;
            
            const dateRegex = /^(\d{4}-\d{2}-\d{2})-/.exec(file)
            if (!dateRegex) return;

            const date = new Date(dateRegex[1])
            posts.push(await Post.fromFile(fileName, date))
        })

        return posts
    }
}

export default BlogEngine