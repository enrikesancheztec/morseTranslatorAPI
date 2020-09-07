let express = require('express')
let cors = require('cors');
let bodyParser = require('body-parser');
let apiRoutes = require("./routes");

let app = express();
app.use(cors());

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Running Morse Code Translator on Port " + port);
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/api', apiRoutes);
