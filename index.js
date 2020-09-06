//Import Express
let express = require('express')
//Start App
let app = express();

var cors = require('cors');

app.use(cors());

//Assign port
var port = process.env.PORT || 8080;

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running Morse Code Translator on Port " + port);
})

//import body parser
let bodyParser = require('body-parser');

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Import routes
let apiRoutes = require("./routes");
//Use API routes in the App
app.use('/api', apiRoutes);
