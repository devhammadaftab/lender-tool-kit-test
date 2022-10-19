import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            firstName:'John',
            lastName:'Doe',
            age:21,
            Skills:['javaScript','.Net','Python']
        }
    },
   
})

export default userSlice.reducer;