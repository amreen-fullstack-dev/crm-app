const { response } = require('express');
var express = require('express');             
const { request } = require('http');


var app = express();                        

app.use(express.json());                    

var User=[                           
    {
        emailid:'amreen@gmail.com',
        password:amreen
    },

    {
        emailid:'amreen12@gmail.com',
        password:amreen12
    },

    
];

        app.get('/allUser', function (request, response){       //6. user want to get all the produts. we use get'.'get' need two parameter 1) endpoint 20 function in which req and response will be given

        response.send(User);    //7. we should pass the body in brackets. body is nothing but products which is given
})

        app.post('/allUser',function(request,response) {   //9.It(post)vl allow d user2 post d data

          console.log(request.body);

        })                      
         app.listen(8000, function () {           //3. on this application to start the server

         console.log("server started");     // 4.invokes the function

});

    // http://localhost:8000/allUser
