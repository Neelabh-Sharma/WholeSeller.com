import { configureStore } from "@reduxjs/toolkit";
import Productreducer from "../features/Product";
export const store = configureStore({
    reducer:{
        product : Productreducer,
    },
});