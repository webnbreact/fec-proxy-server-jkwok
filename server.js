const express = require('express');
// const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();
const port = 3100;

// app.use(compression());
app.use(morgan('tiny'));

app.use('/rooms/:id', express.static(path.join(__dirname, 'public')));
app.use('/rooms/:id/booking', proxy({ target: 'http://18.224.7.253/', changeOrigin: true }));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});