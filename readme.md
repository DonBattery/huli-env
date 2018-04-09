# Húlí Environment Service

This little package is responsible to provide connection-object for MySQL connection.

By default it uses the standard RDS environment variables, but it can be overriden
with a custom connection-object

**The connection object must contain the following keys:**

```JSON
{
  "host": "",
  "port": "",
  "database": "",
  "user": "",
  "password": ""
}
```

the default connection-object is:

```JAVASCRIPT
{
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
}
```

**The module exports two function:**

One is to get the default (or occasionaly injected) connection-object

```JAVASCRIPT
function getDBConn(connObj)
```

and the other is to override the default connection-object

```JAVASCRIPT
function setDBConn(connObj)
```
