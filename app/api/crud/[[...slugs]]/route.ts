import { Elysia }  from 'elysia'

const app = new Elysia({ prefix: 'api/crud' })
  .get('/', ()=>'hi xoxoxo')
  .listen(8000)

  export type App = typeof app

  export const GET = app.fetch