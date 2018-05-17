var bodyparser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://nahid597:nahid123@ds016108.mlab.com:16108/todo_list')

// which type data take monogoodebd

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var itemone = Todo({ item: "flower is nice" }).save(function(err) {
//     if (err) throw err;
//     console.log("item saved");

// })


var parserencoded = bodyparser.urlencoded({ extended: false });
//var bodyurl = bodyparser.urlencoded({ extended: false });

// var data = [{ item: "Eating milk" }, { item: "Eat Rice" }, { item: "Eat Egg" }];

module.exports = function(app) {


    app.get('/todo', function(req, res) {

        // get data from mongodb and view it.

        Todo.find({}, function(err, data) {

            if (err) throw err;

            res.render('todolist.ejs', { todos: data });
        });
        

    });


    app.post('/todo', parserencoded, function(req, res) {

        // take data from view and add it mongodb..

        var newTodo = Todo(req.body).save(function(err, data) {
            if (err) throw err;
            res.json(data);
        });

    });

    app.delete('/todo/:item', function(req, res) {

        // delete requested data from mongodb..
        Todo.find({ item: req.parms.item.replace(/ /g, "-") }).remove(function(err, data) {

            if (err) throw err;
            res.json(data);

        })


        // data = data.filter(function(todo) {
        //     return todo.item.replace(/ /g, "-") !== req.parms.item;
        // });

        // res.json(data);

    });



}
