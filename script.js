$(document).ready(function() {
	var TodoModel = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false
		},
		toggle: function() {
			this.set('completed', !this.get('completed'));
		}
	});
	var TodoView = Backbone.View.extend({
		tagName: 'li',
		className: 'todo',
		template: _.template($('#todo-template').html()),
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},
		render: function() {
			var html = this.$el.html(this.template(this.model.toJSON()));
			console.log(html);
		},
		events: {
			'click .toggle': 'clickToggle',
			'click button.destroy': 'clickRemove'
		},
		clickToggle: function() {
			this.model.toggle();
		},
		clickRemove: function() {
			this.model.destroy();
		}
	});

	$('#new-todo').bind('keypress', function(e) {
		var code = e.keyCode || e.which;
		if (code == 13) {
			var tv = new TodoView({
				model: new TodoModel({
					title: $('#new-todo').val()
				})
			});
			tv.render();
			$('.todos-list').append(tv.$el);
			$('#new-todo').val('');
		}
	})
});