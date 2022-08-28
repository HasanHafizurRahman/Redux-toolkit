
const store = require("./app/store");
const {counterActions} = require("./Feature/Counter/counterSlice")
const {dynamicCounterActions} = require('./Feature/dynamicCounter/dynamicCounterSlice')

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions
// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

store.dispatch(dynamicCounterActions.increment(3));
store.dispatch(dynamicCounterActions.increment(5));
store.dispatch(dynamicCounterActions.decrement(2))