const get = require('lodash/get')
const log = require('common/log')
const pkgDetails = require('../../package.json')
const awsS3 = require('../awsS3')

module.exports = {
  Upload(req, res) {
    try {
      const fileName = get(req.body, 'key')
      const fileData = get(req.body, 'data')
      awsS3
        .upload(fileName, fileData)
        .then((result) => {
          res.json(result)
        })
        .catch((error) => {
          log.error(error)
          res.json(`Failure:${error}`)
        })
    } catch (error) {
      log.error(error)
    }
  },
  HelathCheck(req, res) {
    log.info('Health check - OK')
    res.json('OK')
  },
  Info(req, res) {
    const name = process.env.npm_package_name || pkgDetails.name
    const version = process.env.npm_package_version || pkgDetails.version
    res.json(`{'name': '${name}','version': '${version}'}`)
  },
}
