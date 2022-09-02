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
function createTodo() {}

/**
 * read Todo
 * @abstract
 * @see {@link Todo}
 * @param {string} id - Required
 * @returns {Todo}
 */
function readTodo(id) {}

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
function updateTodo() {}

/**
 * delete Todo
 * @abstract
 * @param {string} [id] - without id : every Todo will be deleted
 * @param {string[]} [tags] - without tags : tags won't be deleted
 */
function deleteTodo() {}

// // Use the inline {@link} tag to include a link within a free-form description.
// /**
//  * @see {@link foo} for further information.
//  * @see {@link http://github.com|GitHub}
//  */
// function bar() {}

// /**
//  * Generic dairy product.
//  * @constructor
//  */
// function DairyProduct() {}

// /**
//  * Check whether the dairy product is solid at room temperature.
//  * @abstract
//  * @return {boolean}
//  */
// DairyProduct.prototype.isSolid = function () {
// 	throw new Error('must be implemented by subclass!');
// };

// /**
//  * Cool, refreshing milk.
//  * @constructor
//  * @augments DairyProduct
//  */
// function Milk() {}

// /**
//  * Check whether milk is solid at room temperature.
//  * @return {boolean} Always returns false.
//  */
// Milk.prototype.isSolid = function () {
// 	return false;
// };
