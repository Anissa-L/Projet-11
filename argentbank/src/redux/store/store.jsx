import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import profileSlice from "../reducers/profileSlice";

const store = configureStore({
    reducer: {
        // Le slice authSlice gère l'état lié à l'authentification
        auth : authSlice,
        // Le slice profileSlice gère l'état lié au profil utilisateur
        profile : profileSlice,
    },
    //devTools :  process.env.NODE_ENV !== 'production',
})

export default store;