// rajout
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../redux/reducers/authSlice";
//import { response } from "express";

function Login (){
    // États locaux pour les champs du formulaire et les erreurs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);

    // Utilisation de useNavigate pour la navigation après connexion
    const navigate = useNavigate();
    // Utilisation de useDispatch pour envoyer des actions Redux
    const dispatch = useDispatch();

    // Vérifier si l'email et le mot de passe sont déjà présents dans le local storage
    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    // Fonction pour gérer la soumission du formulaire de connexion
    const fetchLogin = async (e) => {
        e.preventDefault();
        try{
            // Envoi de la requête de connexion à l'API
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"}, // En-tête de la requête
                body: JSON.stringify ({email, password }), // Corps de la requête avec email et mot de passe(identifiant de l'utilisateur)
            });

            const data = await response.json(); // Récupération des données de la réponse
            const token = data.body.token; // Extraction du token de la réponse
            dispatch(setLogin({token})); // Envoi de l'action setLogin avec le token
            // Stocker l'email et le mot de passe dans le local storage si "Remember Me" est coché
            if (rememberMe) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
            }
            navigate("/profile"); // Navigation vers la page de profil après connexion
        }
            catch (err) {
                console.log(err); // Affichage de l'erreur dans la console
                setError("Email or Password invalid"); // Affichage d'un message d'erreur
            }
    };

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className="sign-in-text">Sign In</h1>
                <form onSubmit={fetchLogin}> {/*Le formulaire appelle la fonction fetchLogin lors de la soumission. */}
                <div className="input-wrapper">
                    <label htmlFor="email">Username</label>
                    <input type="text" id="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} 
                    /> {/*Met à jour l'état local email lorsque l'utilisateur saisit du texte. */ }
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    /> {/*Met à jour l'état local password lorsque l'utilisateur saisit du texte. */ }
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {error && <p className="input-error">{error}</p>} {/*Affiche un paragraphe contenant le message d'erreur si error n'est pas null. */}
                <button className="sign-in-button" type="submit">Sign In</button>
                </form> 
            </section>
        </main>

    );
}

export default Login;