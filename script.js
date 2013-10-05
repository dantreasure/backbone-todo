/*
 * jQuery Setup
 */


$(document).ready(function() {

    
var newTodoView = new todoView(
	{ 
		model: new todo({
			title: 'Test'
		})
		
	}
);

newTodoView.render();
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
    this.$el.append(this.template(this.model.toJSON()));
  }
});

