var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/voterlist',function(req,res){
	var db = req.db;
	var collection = db.get('voterlist');
	collection.find({},{},function(e, docs){
		res.json(docs);
	});
});

router.post('/addvoter', function(req,res){
	var db = req.db;
	var collection = db.get('voterlist');
	collection.insert(req.body, function(err,result){
		res.send(
			(err === null)?{msg: ""}:{msg:err}
		);
		console.log('error here');
	});
});

router.delete('/deletevoter/:id',function(req,res){
	var db = req.db;
	var collection = db.get('voterlist');
	var voterToDelete = req.params.id;
	collection.remove({'_id':voterToDelete},function(err){
		res.send((err === null)?{msg:''}:{msg:'error:'+err});
	});
});

module.exports = router;