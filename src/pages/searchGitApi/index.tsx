import ButtonIcon from './ButtonIcon';
import { User as FormData } from 'types/user';
import './styles.css';
import { useState } from 'react';

const SearchGitApi = () => {

    const [FormData, setFormData] = useState<FormData>({
        name: 'Kennedy',
        location: 'Localidade Kennedy',
        url: 'Kennedy',
        followers: 'Seguidores Kennedy',
        avatar_url: "https://avatars.githubusercontent.com/u/81121745?v=4"
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(FormData)
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

        <div className="base-card response-card">
          <div className="response-card-img">
            <img src={FormData.avatar_url} alt="" />
          </div>
          <div className="response-card-datas">
            <h5>Informações:</h5>
            <input 
                type="text" 
                value={"Perfil: "+FormData.url} 
                onChange={handleChange}
                readOnly
              />
            <input 
                type="text" 
                value={"Seguidores: "+FormData.followers}
                onChange={handleChange}
                readOnly
            />
            <input 
                type="text" 
                value={"Localidade: "+FormData.location}
                onChange={handleChange}
                readOnly
            />
            <input 
                type="text" 
                value={"Nome: "+FormData.name}
                onChange={handleChange}
                readOnly
            />
          </div> 
        </div>
      </form>
    </>
  );
};

export default SearchGitApi;
