// Read-only readiness check; never creates a form or a submission.
import { createRequire } from 'node:module'
import dotenv from 'dotenv'

dotenv.config()
const require = createRequire(import.meta.url)
const { Pool } = createRequire(require.resolve('@payloadcms/db-postgres'))('pg')
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is missing')
const url = new URL(process.env.DATABASE_URL)
url.searchParams.set('options', [url.searchParams.get('options'), '-c default_transaction_read_only=on'].filter(Boolean).join(' '))
const pool = new Pool({ connectionString: url.toString(), connectionTimeoutMillis: 10000 })
try {
  const guard = await pool.query('SHOW default_transaction_read_only')
  if (guard.rows[0].default_transaction_read_only !== 'on') throw new Error('Read-only guard is not active')
  console.log('PASS PostgreSQL read-only connection')
  const forms = await pool.query('SELECT COUNT(*)::int AS count FROM forms WHERE title = $1', ['AEC Growth Audit'])
  console.log('Existing AEC Growth Audit forms: ' + forms.rows[0].count)
} catch (error) {
  console.error('Read-only readiness check failed: ' + error.message)
  process.exitCode = 1
} finally {
  await pool.end()
}
