import {users} from '../../../hono-server/users'
import {handle} from 'hono/vercel'


export type AppType = typeof users
export const GET = handle(users)