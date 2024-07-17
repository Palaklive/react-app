import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './common-features'

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})

export default store