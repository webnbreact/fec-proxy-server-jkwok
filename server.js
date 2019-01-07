const express = require('express');
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();
const port = 3100;

app.use(compression());
app.use(morgan('tiny'));

app.use('/rooms/:id', express.static(path.join(__dirname, 'public')));
app.use('/rooms/:id/booking', proxy({ target: 'http://ec2-18-224-7-253.us-east-2.compute.amazonaws.com/', changeOrigin: true }));
app.use('/rooms/:id/listings', proxy({ target: 'http://ec2-13-59-45-120.us-east-2.compute.amazonaws.com/', changeOrigin: true }));
app.use('/rooms/:id/pictures', proxy({ target: 'http://ec2-18-221-26-182.us-east-2.compute.amazonaws.com/', changeOrigin: true }));
app.use('/rooms/:id/stars', proxy({ target: 'http://ec2-18-218-142-121.us-east-2.compute.amazonaws.com/', changeOrigin: true }));
app.use('/rooms/:id/hostDetails', proxy({ target: 'http://ec2-18-218-142-121.us-east-2.compute.amazonaws.com/', changeOrigin: true }));
app.use('/rooms/:id/reviews', proxy({ target: 'http://ec2-18-218-142-121.us-east-2.compute.amazonaws.com/', changeOrigin: true }));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});