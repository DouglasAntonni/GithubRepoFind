
import githublogo from '../Assets/github.png';
import Input from "../Components/Input";
import { Container } from './styles'
import ItemRepo from "../Components/ItemRepos";
import Button from "../Components/Button"
import { useState } from 'react';
import {api} from "../Services/api";

function App() {

  const [currentrepos, setCurrentRepos] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentrepos}`)
    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepos('')
        return
      }
     
    }
    alert('Repositório já Listado ou não encontrado')
  }
  const handleRemoveRepos = (id) =>{
    setRepos(repos.filter(repo => repo.id !== id));

  }

  return (
    <Container>
      <img src={githublogo} width={72} height={72} alt="Logo do github" />
      
      <Input value={currentrepos} onChange={(e) => setCurrentRepos(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map (repo => <ItemRepo repo={repo} handleRemoveRepos={handleRemoveRepos} /> )}
      
    </Container >
  );
}

export default App;
