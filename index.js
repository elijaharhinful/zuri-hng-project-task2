const express = require("express");

//init app
const app = express();
app.use(express.json());

const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.json({
        "slackUsername": "defacto",
        "backend": true,
        "age": 25,
        "bio": "I am a food scientist with a heightened interest in tech. looking to merge food science and IT. Wish me luck!!"
    });
});

app.post("/calc",(req,res) => {
    let operation = req.body.operation_type;
    let x = req.body.x;
    let y = req.body.y;

    // operations = ["add","addition","multiply","multiplication","subtract","subtraction"]
    
    if (operation == "addition" || operation == "add" ){
        res.json({ 
            "slackUsername" : "defacto",
             "result" : x + y,
              "operation_type": operation,
            } );

    }else if (operation == "subtraction" || operation == "subtract"){
        res.json({ 
            "slackUsername" : "defacto",
             "result" : x- y,
              "operation_type": operation,
            } );

    } else if (operation == "multiply" || operation == "multiplication"){
        res.json({ 
            "slackUsername" : "defacto",
             "result" : x * y,
              "operation_type": operation,
            } );
    }else {
        res.send("Invalid operation type")
    }
});

app.listen(port, (error) =>{
    if (error){
        console.log(error)
    }else{
        console.log('Server is running here: http://localhost:'+ port )
    }
})