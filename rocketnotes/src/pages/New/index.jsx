import { Container } from "./style";
import   Header  from "../../components/Header";
import { Button } from "../../components/Button";
import { Form } from "./style";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Section } from '../../components/section/index.jsx'
import { NoteItem } from "../../components/NoteItem";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/Button Text";

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] =useState("")


    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] =useState("")


    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] =useState("")

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1)
    }


    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink (deleted) {
        setLinks( prevState => prevState.filter(link => link !== deleted))
    }


    function handleAddTag() {

        setTags( prevState => [...prevState,newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags( prevState => prevState.filter(tag => tag !== deleted))
    }


    async function handleNewNote(){
            if(!title){
                return alert ("Você precisa adicionar o título da nota")
            }
            if(newLink){
                return alert ("Acho que você esqueceu de adicionar um link")
            }
            if(newTag){
                return alert ("Acho que você esqueceu de adicionar uma tag")
            }
           await api.post("/notes", {
            title, 
            description,
            tags,
            links
           });

           alert("Nota criada com sucesso!");
           navigate(-1)
    }







    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText
                        title="Voltar"
                        onClick = {() => handleBack()}
                        
                        />
                    </header>

                    <Input 
                     placeholder = 'Título'
                     onChange={ e=> setTitle (e.target.value)}
                     />
                    <Textarea 
                    placeholder ='Observações'
                    onChange={ e=> setDescription (e.target.value)}
                    />

                    <Section title="Links úteis"/>
                    {
                     links.map((link, index) => (
                     <NoteItem
                        key={String(index)}
                        value = {link}
                        onClick={() => handleRemoveLink(link)} 
                        />
                
              ))
            }
                    
                    <NoteItem 
                     isNew
                     placeholder="Novo Link"
                     value={newLink}
                     onChange= {e => setNewLink(e.target.value)}
                     onClick={handleAddLink}
                      />

                    <Section title="Marcadores"/>
                    <div className="tags">
                        {
                            tags.map((tag, index) => (
                               <NoteItem 
                                key={String(index)}
                                value={tag} 
                                onClick={() => handleRemoveTag(tag)}
                               
                               />
                            ))
                            
                        }

                        <NoteItem
                         isNew 
                         placeholder="Nova tag"
                         onChange={ e => setNewTag(e.target.value)}
                         value={newTag}
                         onClick={handleAddTag}
                         />
                     </div>
                        <Button 
                        title= "Salvar"
                        onClick= {handleNewNote}/>
                </Form>
            </main>
        </Container>
    )
}