require('dotenv/config');

module.exports = {
  config: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN || '',
    region: process.env.REGION
  },
  buckets: {
    s3_transcription_bucket: process.env.S3_TRANSCRIPTION_BUCKET,
    s3_records_bucket: process.env.S3_RECORDS_BUCKET
  },
  databases: {
    redis: {
      host: process.env.REDIS_HOST,
      port: 6379
    },
    mongo: process.env.MONGO_HOST
  }
};
