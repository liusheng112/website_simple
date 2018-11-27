const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = 8888;
const projectRootPath = path.join(__dirname, 'static', 'dist');

app.use(compression());
app.use(express.static(projectRootPath));
app.use((req, res) => {
    res.sendFile(projectRootPath + '/index.html');
    console.log(req.path);
});
app.listen(port, () => {
    console.log('app is listening at port :' + port);
});