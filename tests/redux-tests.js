const assert = require('assert');
const actions = require('../actions/index.js');

// Synchronous action creators are trivial to test.

// Example reducer test.
describe('todos reducer', function() {
    it('is initialized correctly', function() {
        let expected = actions.addTodo(undefined);

        assert.equal(expected.type, 'ADD_TODO');
        assert.equal(expected.id, 0);
    });
});

// It's possible to test the store fairly easily.
// https://redux.js.org/docs/basics/Store.html#dispatching-actions provides a template for doing so.
// However, coverage of actions and the dispatch obviated the need.