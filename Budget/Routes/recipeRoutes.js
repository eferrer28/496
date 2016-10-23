var express = require('express');
//takes the name of our schema
var routes = function (Recipe) {

    var recipeRouter = express.Router();
    console.log("here?");
    recipeRouter.route('/')
        .post(function (req, res) {
            var recipe = new Recipe(req.body);

            recipe.save();
            res.status(201).send(recipe);

        })
        .get(function (req, res) {
            //  console.log("fuck?");

            var query = {};

            if (req.query.name) 
            {
                query.name = req.query.name;
            }
            Recipe.find(query, function (err, recipes) {
                if (err)
                {
                    res.status(500).send(err);
                    console.log("fuck2323?");
                }
                else
                    res.json(recipes);
            });
        });
    
    //start middleware for route thats id's
    recipeRouter.use('/:recipeId', function(req, res, next){
        Recipe.findById(req.params.recipeId, function (err, recipe) {
        if (err)
            res.status(500).send(err);
         else if(recipe)
             {
                 //if there's a recipe available go next
                 //add it to request //makes it available to everything else below
                 req.recipe = recipe;
                 next();
             }
            else
            {
                    res.status(404).send('no recipes');
            }
            });
    });
        
    //if recipe found then it comes here or error above
    recipeRouter.route('/:recipeId')
        .get(function (req, res) {
            res.json(req.recipe);


        })
            //edit the id selected
        .put(function(req, res){
            req.recipe.name = req.body.name;
            req.recipe.ingredients = req.body.ingredients;
            req.recipe.url = req.body.url;
            req.recipe.save(function(err){
                if(err)
                    {
                        res.status(500).send(err);
                        
                    }
                else{
                    res.json(req.recipe);
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
                    req.recipe[p] = req.body[p];
                }
            req.recipe.save(function(err){
                if(err)
                    {
                        res.status(500).send(err);
                        
                    }
                else{
                    res.json(req.recipe);
                }
            });
        })
            .delete(function(req, res){
                //removes whatever what was found in middle
                req.recipe.remove(function(err){
                    if(err)
                        res.status(500).send(err);
                    else{
                        res.status(204).send("removed");                              }
                });
            
    });
        return recipeRouter;

};

module.exports = routes;
