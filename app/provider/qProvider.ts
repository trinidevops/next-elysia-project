'use client'
import { QueryClient } from "@tanstack/react-query";
import { treaty } from '@elysiajs/eden'
import type {App } from '../api/crud/[[...slugs]]/route'
import type { Users } from '../api/users/[[...slugs]]/route'

export const client = new QueryClient()

const UsersClient = treaty<Users>('localhost:3000')
const CrudClient = treaty<App>('localhost:3000')