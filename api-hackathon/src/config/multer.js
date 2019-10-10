const multer = require('multer');
const path = require('path');
const aws = require('aws-sdk');

const {
  config,
  buckets: { s3_records_bucket }
} = require('./awsconfig');
aws.config.update(config);

const S3 = new aws.S3();
const multerS3 = require('multer-s3');

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  }),
  s3: multerS3({
    s3: S3,
    bucket: s3_records_bucket,
    key: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
};

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes.s3,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['audio/mp3', 'audio/mpeg'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  }
};
