/*
 * jQuery Setup
 */

$(document).ready(function() {
	// On 'enter' keypress submit the text in todo as a new todo
	$(document).keypress(function(e) {
	    if(e.which == 13) {
			var newTodoView = new todoView({ 
				model: new Todo({
				title: $('#new-todo').val()
				})
			});
			newTodoView.render();	
	    }
	});
});

/*
 * Backbone Setup
 */

var Todo = Backbone.Model.extend({
   defaults: {
        title: '',
        completed: false
    },
   
});



var TodoCollection = Backbone.Collection.extend({
    model: Todo
});

var todoView = Backbone.View.extend({
  el: $('.todos-list'),
  events: {
  	'click li.todo input': 'toggle'
  },
  toggle: function(){
		var completedState = this.model.get('completed');
		console.log(String(completedState));
		// if (completedState){ 
		// 	self.set('completed', false);
		// }
		// else {
		// 	self.set('completed', true);
		// }
	},
  template: _.template($('#todo-template').html()),
  render: function() {
    this.$el.prepend(this.template(this.model.toJSON()));
  }
});

