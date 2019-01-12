const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/database-name'
const secret = process.env.SECRET || 'jafais';

module.exports = { port, dbUri, secret };
