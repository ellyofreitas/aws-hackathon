const ora = require('ora');
const comprenhedService = require('./comprenhed');
const aws = require('aws-sdk');
const Audio = require('../model/Audio');

const {
  config,
  buckets: { s3_transcription_bucket }
} = require('../config/awsconfig');
aws.config.update(config);

const cache = require('../database/redis');

const transcribeService = new aws.TranscribeService();
const S3 = new aws.S3();

module.exports = {
  async start(name, ext, url) {
    const spinner = ora('Starting transcribe').start();
    const {
      TranscriptionJob: { TranscriptionJobName }
    } = await transcribeService
      .startTranscriptionJob({
        LanguageCode: 'pt-BR',
        Media: { MediaFileUri: url },
        MediaFormat: ext,
        TranscriptionJobName: `${name}-${Date.now()}`,
        OutputBucketName: s3_transcription_bucket
      })
      .promise();

    cache.get('id', (e, value) => {
      if (e) console.log(e);
      cache.set(TranscriptionJobName, value);
    });

    spinner.stop();
    console.log('Transcription started!');
    // this.get();
    return TranscriptionJobName;
  },
  async get(TranscriptionJobName, io) {
    console.log("Waiting Transcribe end's");
    const spinner = ora().start();
    // spinner.text = '';
    let {
      TranscriptionJob: { TranscriptionJobStatus }
    } = await transcribeService
      .getTranscriptionJob({ TranscriptionJobName })
      .promise();

    spinner.text = 'Transcribing...';
    while (TranscriptionJobStatus !== 'COMPLETED') {
      let {
        TranscriptionJob: { TranscriptionJobStatus: bufferStatus }
      } = await transcribeService
        .getTranscriptionJob({ TranscriptionJobName })
        .promise();
      if (bufferStatus === 'COMPLETED') {
        TranscriptionJobStatus = bufferStatus;
        spinner.stop();
        console.log('Complete');
      }
    }
    spinner.start('Getting file in S3');

    const Key = TranscriptionJobName + '.json';

    const bufferFile = await S3.getObject({
      Bucket: s3_transcription_bucket,
      Key
    }).promise();

    // spinner.text = 'File received';
    const json = JSON.parse(bufferFile.Body.toString());

    cache.get(TranscriptionJobName, (e, value) => {
      if (e) console.log(e);
      io.to(value).emit('done-transcription', json);
    });

    await Audio.updateOne({ name: TranscriptionJobName }, { url: Key });

    spinner.stop();
    // return console.log(json.results.transcripts[0].transcript);
    return comprenhedService.detectKeyPhrases(
      TranscriptionJobName,
      json.results.transcripts[0].transcript,
      io
    );
  }
};
