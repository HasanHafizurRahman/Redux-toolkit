const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require('../Feature/Counter/counterSlice')

// configure store
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

module.exports = store;