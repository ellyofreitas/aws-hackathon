'use strict';

const aws = require('aws-sdk');
const path = require('path');
const socketio = require('socket.io-client');

const transcribeService = new aws.TranscribeService();

module.exports.handler = async ({ Records: records }, context) => {
  try {
    const io = socketio(process.env.API_SOCKET, {
      query: {
        type: 'lambda'
      }
    });
    await Promise.all(
      records.map(async record => {
        const { key } = record.s3.object;

        const recordUrl = [
          `https://${process.env.S3_AUDIO_BUCKET}.s3-sa-east-1.amazonaws.com`,
          key
        ].join('/');

        const TranscriptionJobName = key;

        const { TranscriptionJob } = await transcribeService
          .startTranscriptionJob({
            LanguageCode: process.env.LANGUAGE_CODE,
            Media: { MediaFileUri: recordUrl },
            MediaFormat: path.extname(key).replace('.', ''),
            TranscriptionJobName,
            OutputBucketName: process.env.S3_TRANSCRIPTION_BUCKET
          })
          .promise();

        io.emit('done-transcribe', TranscriptionJob);
        return;
      })
    );

    // callback(null, { message: 'Success!' });

    return {
      statusCode: 201,
      body: { ok: true }
    };
  } catch (error) {
    return console.log(error);
  }
};
