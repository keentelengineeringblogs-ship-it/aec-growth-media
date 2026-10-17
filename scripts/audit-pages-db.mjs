import 'dotenv/config'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const pg = require('../node_modules/.pnpm/pg@8.20.0/node_modules/pg')
const client = new pg.Client({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 15000 })
try {
  await client.connect()
  const result = await client.query(`select id, title, slug, _status from public.pages order by id`)
  console.log(JSON.stringify(result.rows, null, 2))
} catch (error) {
  console.error(JSON.stringify({ name: error.name, code: error.code, message: error.message }))
  process.exitCode = 1
} finally { await client.end().catch(() => {}) }
