var express = require('express');
//takes the name of our schema
var routes = function (Log) {

    var logRouter = express.Router();
    console.log("here?");
    logRouter.route('/')
        .post(function (req, res) {
            var log = new Log(req.body);

            log.save();
            res.status(201).send(log);

        })
        .get(function (req, res) {
            //  console.log("fuck?");

            var query = {};

            if (req.query.foodName) 
            {
                query.foodName = req.query.foodName;
            }
            Log.find(query, function (err, logs) {
                if (err)
                {
                    res.status(500).send(err);
                    console.log("fuck2323?");
                }
                else
                    res.json(logs);
                    
            });
        });
    

        
    
    //start middleware for route thats id's
    logRouter.use('/:logId', function(req, res, next){
        Log.findById(req.params.logId, function (err, log) {
        if (err)
            res.status(500).send(err);
         else if(log)
             {
                 //if there's a log available go next
                 //add it to request //makes it available to everything else below
                 req.log = log;
                 next();
             }
            else
            {
                    res.status(404).send('no logs');
            }
            });
    });
        
    //if log found then it comes here or error above
    logRouter.route('/:logId')
        .get(function (req, res) {
            res.json(req.log);


        })
            //edit the id selected
        .put(function(req, res){
            req.log.foodName = req.body.foodName;
            req.log.budgetFriendly = req.body.budgetFriendly;
            req.log.paleo = req.body.paleo;
            req.log.recipe = req.body.recipe;
            req.log.save(function(err){
                if(err)
                    {
                        res.status(500).send(err);
                        
                    }
                else{
                    res.json(req.log);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                {
                    delete req.body._id
                }
            for(var p in req.body)
                {
                    req.log[p] = req.body[p];
                }
            req.log.save(function(err){
                if(err)
                    {
                        res.status(500).send(err);
                        
                    }
                else{
                    res.json(req.log);
                }
            });
        })
            .delete(function(req, res){
                //removes whatever what was found in middle
                req.log.remove(function(err){
                    if(err)
                        res.status(500).send(err);
                    else{
                        res.status(204).send("removed");                              }
                });
            
    });
        return logRouter;

};

module.exports = routes;
