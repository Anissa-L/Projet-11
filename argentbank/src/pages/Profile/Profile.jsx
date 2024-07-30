import Account from "../../components/Account/Account";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile, setGetProfile } from "../../redux/reducers/profileSlice";

function Profile (){
    const token = useSelector(state => state.auth.token);
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    // État pour gérer le mode d'édition
    const [editMode, setEditMode] = useState(false);
    // États pour les inputs du formulaire
    const [userName, setUserName] = useState(profile.userName);

    // Fonction pour récupérer les informations du profil utilisateur
    useEffect(() => {
        const fetchDataUser = async () => { 
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method : "POST",
                        headers :{
                            "Authorization" : `Bearer ${token}`
                        }
                })
                const data = await response.json()
                dispatch(setGetProfile({data}))
                setUserName(data.body.userName);
            } catch (err){
                console.log(err)
            }
        }
        fetchDataUser()
    }, [token, dispatch]);

    // Fonction pour gérer le clic sur "Edit Name"
    const handleEdit = () => {
        setEditMode(true);
    };

    // Fonction pour annuler l'édition
    const handleCancel = () => {
        setEditMode(false);
        setUserName(profile.userName);
    };


    // Fonction pour sauvegarder les modifications
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName })
            });
            const data = await response.json();
            dispatch(setEditProfile(data.body.userName));
            setEditMode(false);
        } catch (err) {
            console.log(err);
        }
    };
        

    return(
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{profile.userName}</h1>
                {!editMode ? (
                    <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                ) : (
                    <form onSubmit={handleSave}>
                        <div className="form-input-user">
                            <input
                                className="input-user"
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="save-button">Save</button>
                        <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                    </form>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <Account 
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <Account 
                title="Argent Bank Credit Card (x8349"
                amount="$184.30"
                description="Current Balance"
            />
        </main>
    )
}
export default Profile;