import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const  store = configureStore({
    reducer : {
        auth : authSlice,
        //more slices add here fro posts

    }
})
export default store;