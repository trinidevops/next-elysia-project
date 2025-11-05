import { Hono } from 'hono'

export const users = new Hono().basePath('/api/users')
  users.get('/', (c) => {
  return c.text('Hello User Operations')
})
 users.get('/:name', (c) => {
  const name = c.req.param('name')
  return c.text(`Hello ${name}`)
})