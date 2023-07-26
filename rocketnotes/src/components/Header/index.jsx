import { Container, Profile, Logout} from "./style.js";
import { useAuth } from "../../hooks/auth.jsx";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


import  { RiShutDownLine } from 'react-icons/ri'
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export  default function Header() {

    const {signOut, user} = useAuth();

    const navigation  = useNavigate();

    function handleSignOut(){
        navigation("/")
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    
    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} 
                alt="foto do usuário"/>


                <div>
                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>
                
            </Profile>

            <Logout onClick={handleSignOut}>
                    <RiShutDownLine/>
            </Logout>

        </Container>



    )
}