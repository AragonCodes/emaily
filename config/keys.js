// keys.js - figure out what set of credentials to return
const keys = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev');

module.exports = keys;
