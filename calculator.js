const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const opSign = req.body.operation;
    

    switch (opSign) {
        case "add":
            const sum = num1 + num2;
            res.send(`The sum of your operation is ${sum}`);
            break;
        case "subtract":
            const difference = num1 - num2;
            res.send(`The difference of your operation is ${difference}`);
            break;
        case "multiply":
            const product = num1 * num2;
            res.send(`The product of your operation is ${product}`);
            break;
        case "division":
            const shared = num1 / num2;
            res.send(`The division of your operation is ${shared}`);
            break;
        case "remainder":
            const remainder = num1 % num2;
            res.send(`The remainder of your operation is ${remainder}`);
            break;
    
        default:
            break;
    }




    // console.log(req.body.num1);
    // console.log(req.body.num2);
    // console.log(req.body.operation);


    // res.send("Thanks, we are processing your request...");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});