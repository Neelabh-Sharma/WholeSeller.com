import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* The code is creating an asynchronous thunk function called `fetchdata` using the `createAsyncThunk`
function from the `@reduxjs/toolkit` library. */
export const fetchdata = createAsyncThunk('fetchdata',() =>{
    try{
        return axios.get(`https://fakestoreapi.com/products`)
        .then(res => res.data)
        .catch(err => console.warn(err));
    }catch(err){
        console.warn(`Error ${err}`);
    }
});

/* The code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. */

export const product = createSlice({
    name :"product",
    initialState:{
        data :[],
        loading:false,
        error : null
    },
    extraReducers :{
        [fetchdata.pending] : (state) =>{
            state.loading = true;
        } ,
        [fetchdata.fulfilled] : (state , action) =>{
            state.loading = false;
            state.data = action.payload;
        },
        [fetchdata.rejected] : (state , action) => {
            state.loading = false;
            state.error = action.payload;
        } 
    }
});

/* `export default product.reducer;` is exporting the reducer function from the `product` slice as the
default export. This allows other modules to import and use the reducer function when creating the
Redux store. */
export default product.reducer;