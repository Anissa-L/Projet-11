import { createSlice } from "@reduxjs/toolkit";

//slice pour l'authentification
const authSlice = createSlice({
    // Nom du slice
    name: "user",
    // État initial avec un token vide
    initialState: {token: ""},
    reducers: {
        // Action pour définir le token lors de la connexion
        setLogin: (state, action) => {
            state.token = action.payload.token
        },
        // Action pour réinitialiser le token lors de la déconnexion
        setLogout: (state) => {
            state.token = ""
        }, 
    },
});

// Exportation des actions pour les utiliser dans les composants
export const {setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;