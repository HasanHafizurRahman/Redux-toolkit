const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require('../Feature/Counter/counterSlice')
const dynamicCounterReducer = require('../Feature/dynamicCounter/dynamicCounterSlice')
const {createLogger} = require('redux-logger');

const logger = createLogger();

// configure store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat() 
})

module.exports = store;