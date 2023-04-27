const express = require('express');
const app = express();
const port = process.env.PORT || 5052;
const path = require('path');
const fs = require('fs');


app.get('/', function(request, response) {
  const filePath = path.join(__dirname, "build/index.html");
  fs.readFile(filePath, 'utf8', function (err,data) {
    return response.send(data);
  });
});
app.use(express.static(path.join(__dirname, 'build')));


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, "build/index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));