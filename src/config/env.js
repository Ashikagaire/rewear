const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'DEVELOPMENT';
}

dotenv.config({
  path: path.resolve(process.cwd(), `config.${process.env.NODE_ENV}.env`),
});
