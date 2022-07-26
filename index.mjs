import { init, parse } from 'es-module-lexer'
await init

parseAndLog("export * from 'bla'")
console.log('\n')
parseAndLog("import * as pkg from 'bla'")
console.log('\n')
parseAndLog("import { mod } from 'bla'; export { mod }")
console.log('\n')
parseAndLog("export { mod } from 'bla'")
console.log('\n')

function parseAndLog(str) {
  console.log('str:', str)
  const parsed = parse(str)
  console.log('parsed:', parsed)
  const [imports, exports] = parsed
  console.log('exports:', exports)
  console.log('first import name:', str.substring(imports[0].s, imports[0].e))
  console.log('first import statement:', str.substring(imports[0].ss, imports[0].se))
}
