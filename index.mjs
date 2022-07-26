import { init, parse } from 'es-module-lexer'
await init

parseAndLog("export * from 'bla'")
console.log()
parseAndLog("import * as nam from 'bla'")

function parseAndLog(str) {
  console.log('str:', str)
  const parsed = parse(str)
  console.log('parsed:', parsed)
  console.log('substring:', str.substring(parsed[0][0].s, parsed[0][0].e))
  console.log('substring statement:', str.substring(parsed[0][0].ss, parsed[0][0].se))
}
