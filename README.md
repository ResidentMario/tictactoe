## Overview

A working copy of the React-Redux tutorial web application: a to-do list generator. Ironically named `tictactoe`, which is the *React* tutorial application...

To build the distribution:

    npx browserify -t [ babelify --presets [ env react ] --plugins transform-object-rest-spread ] index.js -o dist/index.js
    
To serve this application:

    npx http-server .
    
To unit test the Redux middleware:

    npx mocha tests/redux-tests.js

To debug unit tests, set a `debugger;` break point in the file and then run:

    npx mocha test/redux-tests.js --inspect-brk

Then navigate to `chrome://inspect/`.

## Notes

* **Actions** are payloads of information that get sent to the store. The only way to modify the information contained 
in the store is to emit an action to it.
* **Action Creators** are functions which, when called, emit actions to the store.
* Action Creators do little more than emit JSON objects.
* Actions describe something that has happened, but do not describe how the state of the application changes in response to that. This is the job of the **reducers**, which interpret changes in state in the store.
* Reducers take `(previousState, action)` as input and produce `newState` as output.
* Reducers must be purely functional, with no side effects.
* Redux will call reducers with `undefined` state the first time the application is run, so it's also the responsibility of the reducers to set default state.
* Reducers will need to be combined into one overall reducer for the application at large at build time. This is easy to do: just use the `combineReducers` built-in to smush together individual reducers.
* Reducers can be written to take the entire `previousState` as input. They also, without modification, can be written to take only part (a few fields from) the previous state as input. React will comprehend what to do with partial updates like this automatically.
* Return the previous state for any unknown action. Otherwise your app could crash.
* The **Store** is what holds all of the application state in Redux. There is always just one store per app.
* Use `createStore()` on the meta-reducer (the combined reducer) to initialize the store.
* React differentiates between presentational components and container components.
* In the React-Redux design pattern, containers basically exist solely to handle the link to the Redux data store.
* The React to Redux connection is made with the `connect` function. To use `connect`, define a special `mapStateToProps` function. `mapStateToProps` should explain how to transform the current state into props that will be passed to the wrapped presentational component.
* To read actions that are dispatched from the front end and do something about them (e.g. `onMouseOver`) define a `mapDispatchToProps` method, which takes a dispatch as input and returns new properties to be passed down to presentational components as output.
* To connect containers to the store, use the `connect` method from `react-redux`. This goes something like:

```javascript
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
```

* So much for the reading notes, now on to what I've found...
* There are a lot of individual files floating around when working with React+Redux, which, when combined with the boilerplate, makes trivial projects mighty confusing.
* To set an event dispatch set e.g. `onMouseOver={this.props.onMouseOver}` in the presentational component, and then also something like:

```javascript
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMouseOver: () => {
            dispatch(setStartPin(42, 42));
        }
    }
};
```

...in the container.