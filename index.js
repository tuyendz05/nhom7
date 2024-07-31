const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD with Render!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
res.send('Hello, CI/CD with Render! This is an updated version.');