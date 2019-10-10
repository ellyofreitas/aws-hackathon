const aws = require('aws-sdk');
const { config, buckets } = require('../config/awsconfig');
const cache = require('../database/redis');
aws.config.update(config);

const comprehendService = new aws.Comprehend();
module.exports = {
  async detectKeyPhrases(TranscriptionJobName, Text, io) {
    // const { JobId, JobStatus } = await comprehendService.startKeyPhrasesDetectionJob({}).promise();
    console.log('Detecting key phrases...');
    const { KeyPhrases } = await comprehendService
      .detectKeyPhrases({
        LanguageCode: 'pt',
        Text
      })
      .promise();
    cache.get(TranscriptionJobName, (e, value) => {
      if (e) console.log(e);
      io.to(value).emit('done-comprehend', KeyPhrases);
    });
    console.log('Done');
    console.log(KeyPhrases);

    return KeyPhrases;
  }
};
