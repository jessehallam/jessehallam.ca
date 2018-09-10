import * as fsys from './fsys'
import markdown from 'markdown'

class Post {
    static async fromFile(filename: string, date: Date): Promise<Post> {
        const markdownText = await fsys.readFile(filename)
        
        return new Post
    }
}

export default Post