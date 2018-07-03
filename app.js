let express = require('express');
let tests = require('./routes/tests');

let app = express();

app.all('/', (req, res) => {
    res.json({
       success: true,
       message: "This is the root of the OpenCellID API."
    });
});

app.use('/tests', tests);

app.use((req, res) => {
    res.status(404)
        .send('Oups. The page you\'re looking for doesn\'t exist.')
});

app.listen(3000, () => console.log('Listening on port 3000'));

// users /login /register
// bts /GET + query parameters