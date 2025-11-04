import { Elysia }  from 'elysia'

const user = new Elysia({ prefix: 'api/users' })
  .get('/', ()=>'welcome Back')
  .listen(8001)

  export type Users = typeof user

  export const GET = user.fetch