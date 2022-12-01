let data=[{item:'Feed the dog'},{item:'Learn node js'},{item:'go shopping'}];

var bodyparser = require('body-parser');

var urlencodedparser = bodyparser.urlencoded({ extended: false}); 


module.exports = function(app) {

app.get('/todo', function(request, response) {
  
  response.render("todo", {todos: data});
});

app.post('/todo', urlencodedparser, function(request, response) {
  
  data.push(request.body)
  response.json(data);
});

app.delete('/todo/:item', function(request, response) {
  
  data = data.filter(function(todo) {
    return todo.item.replace(/ /g, '-') !== request.params.item;
  });
  
  response.json(data);
});

};
