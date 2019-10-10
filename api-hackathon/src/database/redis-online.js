const redisClustr = require('redis-clustr');
const redisClient = require('redis');

const {
  databases: {
    redis: { host, port }
  }
} = require('../config/awsconfig');

// console.log(`redis_host: ${host}`);

const redis = new redisClustr({
  servers: [
    {
      host,
      port
    }
  ], createClient: (port, host) => {
    return redisClient.createClient(port, host);
  }
});

redis.on('connect', () => console.log('Redis connected'));
redis.on('error', () => console.log('Redis error'));

module.exports = redis;
