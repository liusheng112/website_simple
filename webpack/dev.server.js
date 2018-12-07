const webpack = require('webpack');
const path = require('path');
const express = require('express');
const compression = require('compression');
const webpackDevMiddle = require('webpack-dev-middleware');
const webpackHotMiddle = require('webpack-hot-middleware');
const devConfig = require('./dev.config');
let app = express();
const projectRootPath = path.join(__dirname, '..','static', 'dist');
const port=8888;
let complier = webpack(devConfig);
app.use(compression());
app.use(express.static(projectRootPath));
app.use(webpackDevMiddle(complier,{
    publicPath:devConfig.output.publicPath
}));
app.use(webpackHotMiddle(complier,{
    heartbeat:2000
}));
app.use((req,res)=>{
    res.sendFile(projectRootPath+'/index.html');
});
app.listen(port,()=>{
    console.log('app is listening at port :'+port);
});

