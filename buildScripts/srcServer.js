import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const webServer = express();
const compiler = webpack(config);

webServer.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

webServer.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

webServer.listen(port, function(error){
  if(error){
    console.log(error);
  }else{
    open('http://localhost:' + port);
  }
});
