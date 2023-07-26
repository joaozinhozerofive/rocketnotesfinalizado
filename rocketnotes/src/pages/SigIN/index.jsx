import { useState } from "react";
import { Container, Form } from "./style";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Background } from "./style";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";


export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signIn} = useAuth();


    function handleSignIn(){
        console.log({email, password})
        signIn({email, password});
    }
    return (<Container>

        <Form>

            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>

            <h2>Faça seu login</h2>

            <Input 
            placeholder="E-mail"
            type = "text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
            />
            <Input z
            placeholder="Senha"
            type = "password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
            />
        <Button title="Entrar" onClick = {handleSignIn}/>
        <Link to="/register">Criar sua conta</Link>
        </Form>
        <Background/>
        



        </Container>) 
}