import { Hono } from 'hono'

export const crud = new Hono().basePath('/api/crud')
  crud.get('/', (c) => {
  return c.text('Hello CRUD Operations')
})