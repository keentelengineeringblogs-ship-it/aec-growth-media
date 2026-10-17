// Local verification only: never runs package.json's migration-bearing build.
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const nextRequire = createRequire(require.resolve('next/package.json'))
nextRequire('@next/env').loadEnvConfig(process.cwd(), process.argv[2] === 'dev')
const command = process.argv[2] || 'build'
if (!['build', 'dev', 'start'].includes(command)) throw new Error('Expected build, dev, or start')
const env = { ...process.env, NEXT_TELEMETRY_DISABLED: '1', PAYLOAD_MIGRATING: 'true' }
if (env.DATABASE_URL) {
  const url = new URL(env.DATABASE_URL)
  url.searchParams.set(
    'options',
    [url.searchParams.get('options'), '-c default_transaction_read_only=on']
      .filter(Boolean)
      .join(' '),
  )
  env.DATABASE_URL = url.toString()
}
const args = command === 'build' ? ['build', '--webpack'] : [command, '--port', '3002']
console.log(
  'Verification: migrations and schema push disabled; PostgreSQL connections are read-only.',
)
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), ...args], {
  env,
  stdio: 'inherit',
})
child.on('exit', (code) => {
  process.exitCode = code ?? 1
})
child.on('error', (error) => {
  console.error(error.message)
  process.exitCode = 1
})
