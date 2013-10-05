/*
 * jQuery Setup
 */

$(document).ready(function() {
	$(document).keypress(function(e) {
	    if(e.which == 13) {
			var newTodoView = new todoView({ 
				model: new todo({
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

var todo = Backbone.Model.extend({
   defaults: {
        title: '',
        completed: false
    }
});

var todoView = Backbone.View.extend({
  el: '.todos-list',
  template: _.template($('#todo-template').html()),
  render: function() {
    this.$el.prepend(this.template(this.model.toJSON()));
  }
});

