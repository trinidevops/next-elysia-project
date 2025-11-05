'use client'
import { QueryClient } from "@tanstack/react-query";
import type { AppType } from '../hono-server/hono'
import { hc } from 'hono/client'

export const client = new QueryClient()
export const clt = hc<AppType>('http://localhost:3000/')