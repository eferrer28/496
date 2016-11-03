var express = require('express');
//takes the name of our schema
var routes = function (User) {

    var userRouter = express.Router();
    console.log("here?");
    userRouter.route('/')
        .post(function (req, res) {
            var user = new User(req.body);

            user.save();
            res.status(201).send(user);

        })
        .get(function (req, res) {
            //  console.log("fuck?");

            var query = {};

            if (req.query.name) 
            {
                query.name = req.query.name;
            }
            User.find(query, function (err, users) {
                if (err)
                {
                    res.status(500).send(err);
                    console.log("fuck2323?");
                }
                else
                    res.json(users);
            });
        });
    
    //start middleware for route thats id's
    userRouter.use('/:userId', function(req, res, next){
        User.findById(req.params.userId, function (err, user) {
        if (err)
            res.status(500).send(err);
         else if(user)
             {
                 //if there's a user available go next
                 //add it to request //makes it available to everything else below
                 req.user = user;
                 next();
             }
            else
            {
                    res.status(404).send('no users');
            }
            });
    });
        
    //if user found then it comes here or error above
    userRouter.route('/:userId')
        .get(function (req, res) {
            res.json(req.user);


        })
            //edit the id selected
        .put(function(req, res){
            req.user.name = req.body.name;
            req.user.email = req.body.email;
            req.user.budget = req.body.budget;
            req.user.logs = req.body.logs;
            req.user.save(function(err){
                if(err)
                    {
                        res.status(500).send(err);
                        
                    }
                else{
                    res.json(req.user);
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
                    req.user[p] = req.body[p];
                }
            req.user.save(function(err){
                if(err)
                    {
                        res.status(500).send(err);
                        
                    }
                else{
                    res.json(req.user);
                }
            });
        })
            .delete(function(req, res){
                //removes whatever what was found in middle
                req.user.remove(function(err){
                    if(err)
                        res.status(500).send(err);
                    else{
                        res.status(204).send("removed");                              }
                });
            
    });
        return userRouter;

};

module.exports = routes;
