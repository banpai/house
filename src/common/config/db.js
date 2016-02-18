'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '3307',
      database: 'test',
      user: 'root',
      password: 'root',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};
