/**
 * Represents Todo.
 * @constructor
 * @param {string} id - The id of Todo.
 * @param {string} content - The content of Todo.
 * @param {boolean} isCompleted - Check whether Todo is completed. i.e. if Todo is completed : true
 * @param {string} category - The category of Todo.
 * @param {string[]} [tags] - Tags of the Todo.
 */
function Todo(id, content, isCompleted, category, tags) {}

/**
 * crate Todo
 * @see {@link Todo}
 * @param {string} content - Required
 * @param {boolean} isCompleted
 * @param {string} category
 * @param {string[]} [tags]
 */
function createTodo(todoItem) {
  const todo = {...todoItem}
  if(typeof todo.content == 'undefined') {
    throw 'content required'
  }
  return todo;
}


/**
 * read Todo
 * @abstract
 * @see {@link Todo}
 * @param {string} id - Required
 * @returns {Todo}
 */
async function readTodo(id) {
  
}

/**
 * update Todo
 * @abstract
 * @see {@link Todo}
 * @param {string} id 
 * @param {string} content 
 * @param {boolean} isCompleted
 * @param {string} category 
 * @param {string[]} [tags] 
 */
async function updateTodo(todoItem) {

}

/**
 * delete Todo
 * @abstract
 * @param {string} [id] - without id : every Todo will be deleted
 * @param {string[]} [tags] - without tags : tags won't be deleted
 */
async function deleteTodo({ id,tags }) {

}
