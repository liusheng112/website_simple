const express = require('express');
const path = require('path');
const app = express();
const port = 8888;
const projectRootPath = path.join(__dirname, 'static/dist');
app.use(express.static(projectRootPath));
app.use((req, res) => {
    res.sendFile(projectRootPath + '/index.html');
});
app.listen(port, () => {
    console.log('app is lstening at port :' + port);
});