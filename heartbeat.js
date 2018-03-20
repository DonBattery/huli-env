const dbConfig = require('./dbservice');

function endpoint(req, res, next) {
  if (/^\/heartbeat\/?$/.test(req.url)) {
    const conn = mySql.createConnection(dbConfig.dbConn);
    conn.connect((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ status: 'OK' });
      }
    });
    conn.end();
  } else {
    next();
  }
}

module.exports = {
  endpoint
};
