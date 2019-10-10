const Audio = require('../../model/Audio');

const aws = require('aws-sdk');

const {
  config,
  buckets: { s3_transcription_bucket }
} = require('../../config/awsconfig');
aws.config.update(config);

const S3 = new aws.S3();

module.exports = {
  async update(data, io) {
    try {
      const { KeyPhrases, jobName } = data;
      const key = jobName
        .split('.')
        .slice(0, -1)
        .join('.');

      // const clientSocket = cache.getAsync('client');

      const audio = await Audio.findOne({ key });

      if (!audio) return console.log('error brabor');

      audio.KeyPhrases = KeyPhrases;
      audio.done = true;

      const { Body } = await S3.getObject({
        Bucket: s3_transcription_bucket,
        Key: jobName
      }).promise();
      
      const json = JSON.parse(Body.toString());

      audio.transcription = json;

      await audio.save();
      console.log('emitindo para front', audio)
      return io.emit('done', audio);
    } catch (err) {
      return console.log(err.message);
    }
  }
};
