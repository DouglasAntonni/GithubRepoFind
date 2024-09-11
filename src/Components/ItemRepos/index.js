
import { ItemContainer  } from "./styles";

function ItemRepos ({repo, handleRemoveRepos}) {
    const handleRemove =() =>{
        handleRemoveRepos(repo.id);
    }
 return(
     
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver Repositório</a><br/>
        <a href={handleRemove} className="remover" rel="noreferrer">Remover</a>
        <hr />
    </ItemContainer>
)
    
}

export default ItemRepos;