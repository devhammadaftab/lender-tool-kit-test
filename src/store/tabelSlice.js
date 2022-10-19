import { createSlice} from "@reduxjs/toolkit";

const tabelSlice = createSlice({
    name: 'task',
    initialState: {
        tabelData: []
    },
    reducers: {
        addToTabel(state, action) {
            state.tabelData.push({id:state.tabelData.length+1,name:action.payload.name})
        },
        deleteTodo(state, action) {
            state.tabelData.splice(action.payload,1);
        }
    }
})

export const { addToTabel, deleteTodo } = tabelSlice.actions;
export default tabelSlice.reducer;