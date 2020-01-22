function RequestInput(reque, resp, next) {
    if(!reque.body.text ) { // check for input validation
        return resp.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function TheHandler(reque, resp, next) {
    var aylien = require("aylien_textapi");
    var textapi = new aylien({
        application_id: 'f947dbdd',
        application_key: 'c8bcac11ea1c165ceb5a05248677e2ea'
    });
    textapi.sentiment({
      'url': reque.body.text
    }, function(error, response) {
        resp.send(response)
    }); 
 
}

exports. RequestInput =  RequestInput;
exports.TheHandler = TheHandler;