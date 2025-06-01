import dayjs from "dayjs"

import { createSlice } from "@reduxjs/toolkit"

const dateStore = createSlice({
    name: 'date',
    initialState: {
        count: 2,
        data: [
            {
                id: 123,
                context: '123',
                date: '2022-12-31'
            },
            {
                id: 246,
                context: '246',
                date: '2022-12-31'
            }
        ]
    },
    reducers: {
        addDate(state, actions) {
            state.data.push({
                id: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                context: actions.payload.context,
                date: actions.payload.year + '-' + actions.payload.month + '-' + actions.payload.day
            })
            state.count++
        },
        deleteDate(state, actions) {
            state.data = state.data.filter(item => item.id !== actions.payload)
            state.count--
        }
    }
})

const { addDate, deleteDate } = dateStore.actions
const dateReducer = dateStore.reducer
export { addDate, deleteDate }
export default dateReducer