import { configureStore} from "@reduxjs/toolkit";
import tabelReducer from './tabelSlice'
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {tabel: tabelReducer ,
    user:userSlice}
});

export default store;