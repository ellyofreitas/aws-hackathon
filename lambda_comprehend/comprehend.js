'use strict';

const aws = require('aws-sdk');
const socketio = require('socket.io-client');

const comprehendService = new aws.Comprehend();
const S3 = new aws.S3();

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

        const { Body } = await S3.getObject({
          Bucket: process.env.S3_TRANSCRIPTION_BUCKET,
          Key: key
        }).promise();

        const json = JSON.parse(Body.toString());

        const { KeyPhrases } = await comprehendService
          .detectKeyPhrases({
            LanguageCode: 'pt',
            Text: json.results.transcripts[0].transcript
          })
          .promise();

        return io.emit('done-comprehend', { jobName: key, KeyPhrases });
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
