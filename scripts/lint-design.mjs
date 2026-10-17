// Use the installed Next flat configs without changing the existing lint config.
import { ESLint } from 'eslint'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: [...nextVitals, ...nextTypeScript],
})
const results = await eslint.lintFiles([
  'src/components/marketing/**/*.{ts,tsx}',
  'src/lib/marketing/*.ts',
  'src/Header/Component.tsx',
  'src/Footer/Component.tsx',
  'src/app/(frontend)/page.tsx',
  'src/app/(frontend)/layout.tsx',
  'src/app/(frontend)/[[]slug[]]/**/page.tsx',
])
console.log(await (await eslint.loadFormatter('stylish')).format(results))
process.exitCode = results.some((result) => result.errorCount > 0) ? 1 : 0
