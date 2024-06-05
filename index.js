const express = require('express'),
    app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/public/pages');
app.use(express.static(__dirname + '/public/static'));

for(let x of ['router']) require(`./handlers/${x}`)(app);

app.listen(80, () => {
    console.log('Server is running on port 80');
})