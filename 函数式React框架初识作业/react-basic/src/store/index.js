import { configureStore } from "@reduxjs/toolkit"

import dateReducer from "./modules/dateStore"

const store = configureStore({
    reducer: {
        date: dateReducer
    }
})

export default store