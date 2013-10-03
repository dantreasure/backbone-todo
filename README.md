backbone-todo-start
===================

The start of the backbone-todo project

##Objective

Build a functioning (albeit simple) MV* task list project using Backbonejs

##Steps (day one)
###1: Create a Todo model.
* Your model should have two attributes: `title`, and `completed`
* `completed` should default to `false`

###2: Create a Todo view (and associated template).
* The structure of your template should look something like this:
<pre><code>
    &lt;script type="text/template" id="todo-template">
      &lt;... template here ...>
    &lt;/script>
</pre></code>
* The template code markup itself should be pretty simple: 
  * An input of `type="checkbox"`
  * A `label` for the title
  * A `button` (with `class="destroy"`) for deletion

Once you've created the template, create the View itself.
* Don't forget to specify the template using underscore's template function
* Utilize the `tagName` and `className` backbone view properties to make sure the element appended to the `todos-list` is a list element
  * Make sure `tagName` is 'li' and `className` is 'todo'
* Make sure to create a render function that places the `model.toJSON()` into the template
* Don't forget to make the use of `this.$el` when rendering

###3: Test your application
* When the user presses 'enter,' create a new Todo model, add it to a new Todo view, and append it to the `.todos-list` div
  * If you need help with the enter key, check out this Stack Overflow question (and answer): http://stackoverflow.com/questions/302122/jquery-event-keypress-which-key-was-pressed
* Make sure the template renders correctly
* Try adding multiple todos to see what happens

###4: Add the `completed` state
* You need to add a class of `checked` to the label to make the CSS work correctly
* Think about how you could show the class when the `completed` state is true in the template's checkbox using underscore's template language. If you need a hint, try here: http://stackoverflow.com/questions/7230470/how-to-use-if-statements-in-underscore-js-templates
* Test the completed state by adding new todos with the model's default value changed and see if the template reflects the change

##Steps (day two)
###1: Add a `toggle` method to your model that simply toggles the `completed` state 
* Take a look at the `get` and `set` methods for a backbone Model: http://backbonejs.org/#Model-get
  * These methods are used because Models have great support for binding/listening to property changes, which we'll use later
  * What you really need to know for now is that anytime you want to check a property on a model or change it, you need to use either `get` (for reading) or `set` (for changing)
* Your toggle method will be very simple: find out what the model's current `completed` state is and flip it.
  
###2: Add an event for when the check is clicked
* The handler should call the model's `toggle` method
* The handler should also trigger a re-render of the view 
* Go into your template and add the necessary logic for adding a `completed` css class to the label
* Test your application by adding a todo and then clicking it 'complete'

###3: Add a delete event
* Similarly, add an event to delete the todo when the delete button is pressed
* Use backbone's built-in view method of `remove` to force the removal of the view

###4: Refactor your code
* Take a look at the following code:

```javascript
        /* inside of the TodoView code */
        initialize: function () {
	        this.listenTo(this.model, 'change', this.render);
	        this.listenTo(this.model, 'destroy', this.remove);
        },
 ```
The `initialize` method belongs in the backbone View. The view listens for changes on its model to trigger certain behaviors. Think about how you could refactor your code to take advantage of this simpler (and more efficient) method.

###5: Debug your code
Watch what happens when you change the state of your task (complete/not complete). The items might be re-ordering themselves. Ask yourself:
* Why are they re-ordering themselves? (think of what the 'complete' change does and what gets called as a result)
* How could you refactor your code so that the tasks don't get re-inserted every time their state changes?

###5: (Black Diamond): Implement an 'edit' mode
* When the user clicks on the label, make the field editable
  * Hint: have a hidden, absolutely positioned input that can be show/hidden when the view tells it to
  * When in 'edit' mode, the main label should be hidden and the input should show
  * The edit input should look seamless to the label 
  * When the user presses enter, update the title of the model and re-render the view
