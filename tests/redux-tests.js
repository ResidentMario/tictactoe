const assert = require('assert');
const actions = require('../actions/index.js');

// import {
//     addTodo,
//     toggleTodo,
//     setVisibilityFilter
// } from '../actions';

describe('todos reducer', function() {
    it('is initialized correctly', function() {
        console.log(actions.addTodo(undefined, {}));

        assert.equal(
            actions.addTodo(undefined, {}),
            {}
        )
    });
});