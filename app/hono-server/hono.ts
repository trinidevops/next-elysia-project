import { Hono } from 'hono'
import {handle} from 'hono/vercel'
import { users } from './users'
import { crud } from './crud'


const app = new Hono().basePath('/api')
.route('/', crud ).route('/users', users)


export type AppType = typeof app
export const GET = handle(app)