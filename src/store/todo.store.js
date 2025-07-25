import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
} 

const state = {
    todos: [
        new Todo('Learn Vue.js'),
        new Todo('Learn Vuex'),
        new Todo  ('Learn Vue Router'),
    ],  

    filter: Filters.All,

}


const initStore = () => {
    console.log(state);
    console.log('Store initialized');
}

const loadStore = () => {
    throw new Error('loadStore is not implemented');
}

/**
 * 
 * @param {String} description 
 */

const addTodo = (description) => {
    throw new Error('loadStore is not implemented');
}


const toggleTodo = (todoId) => {
    throw new Error('loadStore is not implemented');
}


const deleteTodo = (todoId) => {
    throw new Error('loadStore is not implemented');
}


const deleteCompleted = () => {
    throw new Error('loadStore is not implemented');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('loadStore is not implemented');
}

const getCurrentFilter = (newFilter = Filters.All) => {
    throw new Error('loadStore is not implemented');
}

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
