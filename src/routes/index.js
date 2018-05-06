
const s3controller = require('../controller/S3Controller.js')

/**
 * Route module
 * @param {object} app
 */
module.exports = function (app) {
  /** Route for health check.  */
  app.route('/api/s3/__healthcheck').get(s3controller.HelathCheck)
  /** Route for file upload */
  app.route('/api/s3/upload').post(s3controller.Upload)
  /** Route for API Info. */
  app.route('/api/s3/__info').get(s3controller.Info)
}
