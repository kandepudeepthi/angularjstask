var express = require('express');
var app     = express();
var port    =  8000;
var express = require('express');
var path=require('path');
var app=express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json({
    limit: '50mb'
}))

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
var mysql=require('mysql');
var db_template = require('db-template');
var pool  = mysql.createPool({
connectionLimit : 10,
host            : 'localhost',
user            : 'root',
password        : 'root',
database        : 'Eventlist'
});
excuteQuery = db_template(pool);
app.use(cookieParser())
app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 8000; // you can use any port
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/home/data',function(req,res){
	var data = req.query.location;
	console.log("fdjfdsjfhdsjfh",data);
	excuteQuery.queryForAll('select * from location_tbl where location=?', [data], function(err, result) {
        if (err) {
         console.log(err);
          } else {
          console.log("sdsdfs",result);
          res.send(result);
        }
      });
});

app.listen(8000);