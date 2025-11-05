import {crud} from '../../../hono-server/crud'

import {handle} from 'hono/vercel'


export type AppType = typeof crud
export const GET = handle(crud)