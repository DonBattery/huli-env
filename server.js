const app = require('./app').app;
const PORT = 7373;

app.get('/', (req, res) => {
  res.json({ app: 'Status OK' });
});

app.listen(PORT, () => { 
  console.log(`App is listening on port : ${PORT}`);
});