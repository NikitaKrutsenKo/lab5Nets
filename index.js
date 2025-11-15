const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const name = req.query.name || req.query.n;
  const message = `hello ${name ? name : 'world'}`;
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
