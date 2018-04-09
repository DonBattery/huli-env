let dbConnEnv = {
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
};

function setDBConn(connObj) {
  dbConnEnv = connObj;
}

function getDBConn(connObj) {
  return (connObj || dbConnEnv);
}

module.exports = {
  setDBConn,
  getDBConn
};
