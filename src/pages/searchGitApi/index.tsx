import ButtonIcon from './ButtonIcon';
import { User } from 'types/user';
import './styles.css';
import { useState } from 'react';

const SearchGitApi = () => {

    const [User, setUser] = useState<User>({
        nome: 'Kennedy',
        localidade: 'Localidade Kennedy',
        perfil: 'Perfil Kennedy',
        seguidores: 'Seguidores Kennedy'
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(User)
    }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="base-card">
          <h4>Encontre um perfil Github</h4>
          <input 
                type="text" 
                placeholder="Usuário Github" 
                onChange={handleChange}
            />
          <p>
            <ButtonIcon />
          </p>
        </div>
      </form>
    </>
  );
};

export default SearchGitApi;
