import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'APIasssssssss running 🚀'
  })
})

const port = 3000

serve({
  fetch: app.fetch,
  port
})

console.log(`🚀 Server running at http://localhost:${port}`)
