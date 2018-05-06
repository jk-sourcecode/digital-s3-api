const filter = require('lodash/filter')

module.exports = apiReplace(destinations, metaLinks, target, match, value) {

  const airportCount = filter(destinations, (a) => { if (a == value) return a }).length

  const t = metaLinks.reduce((p, c) => ((c.rel === target) ? c : p))
  if (!t) return ''
  return t.href.replace(match, value)

}
