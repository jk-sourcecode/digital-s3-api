/**
 * Define required npm packages
 */
const awsSDK = require('aws-sdk')
const Promise = require('bluebird')

/**
 * Define S3 bucket key/secret/bucket
 */
const accessKey = process.env.AccessKeyId
const secretKey = process.env.SecretAccessKey
const bucket = process.env.BucketName

/**
 * Creates object for S3 bucket
 */
const s3Bucket = new awsSDK.S3({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
  Bucket: bucket,
})

module.exports = {
  /**
   * Upload file into S3 bucket
   * @param {string} fileName
   * @param {base64} fileData
   */
  upload(fileName, fileData) {
    return new Promise((resolve, reject) => {
      const params = { Bucket: bucket, Key: fileName, Body: fileData }

      s3Bucket.upload(params, (err, data) => {
        if (err) { reject(err) }
        return resolve(data)
      })
    })
  },
}
