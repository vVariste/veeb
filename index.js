const express = require("express");
const fs = require("fs");
const bodyparser = require("body-parser");
const dateET = require("./src/dateTimeET");
const textRef = "public/txt/vanasonad.txt";
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: false}));

app.get("/", (req, res)=>{
	//res.send("expr.js töötab");
	res.render("index");
});

app.get("/timenow", (req, res)=>{
	//res.send("expr.js töötab");
	res.render("timenow", {wd: dateET.longDate()});
});

app.get("/vanasonad", (req, res)=>{
	fs.readFile(textRef, "utf8", (err, data)=>{
		if(err){
			res.render("genericlist", {h2: "vanasõnad", listData: ["ei saa :("]});
		}
		else {
			res.render("genericlist", {h2: "vanasõnad", listData: data.split(";")});
		}
	});
});

app.get("/regvisit", (req, res)=>{
	//res.send("expr.js töötab");
	res.render("regvisit");
});

app.post("/regvisit", (req, res)=>{
	console.log(req.body);
	//avan tekstifaili kirjutamiseks sellisel moel, et kui teda pole, luuakse (parameeter "a")
	fs.open("public/txt/visitlog.txt", "a", (err, file)=>{
		if(err){
			throw(err);
		}
		else {
			//faili senisele sisule lisamine
			fs.appendFile("public/txt/visitlog.txt", req.body.nameInput + ";", (err)=>{
				if(err){
					throw(err);
				}
				else {
					console.log("Salvestatud!");
					res.render("regvisit");
				}
			});
		}
	});
});

app.listen(5323);