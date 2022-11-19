import ButtonIcon from './ButtonIcon';
import { User as FormData } from 'types/user';
import './styles.css';
import { useState } from 'react';
import axios from 'axios';
import ResultCard from 'components/ResultCard';

const SearchGitApi = () => {

  const [busca, setBusca] = useState({
    busca: ''
  });

    const [FormData, setFormData] = useState<FormData>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = event.target.value;
      setBusca({ ...busca, [name]:value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(busca)
        axios.get(`https://api.github.com/users/${busca.busca}`).then((response) => {
          setFormData(response.data);
        }).catch((error) => {
          setFormData(undefined);
          console.log(error);
        })
    };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="base-card">
          <h4>Encontre um perfil Github</h4>
          <input 
                type="text"
                name="busca" 
                placeholder="Usuário Github" 
                onChange={handleChange}
            />
          <p>
            <ButtonIcon />
          </p>
        </div>

        { FormData &&
          <>
            <ResultCard 
              avatar_url={FormData?.avatar_url} 
              followers={FormData?.followers} 
              location={FormData?.location} 
              name={FormData?.name} 
              url={FormData?.url}               
            />      
          </>
          }
      </form>
    </>
  );
};

export default SearchGitApi;
