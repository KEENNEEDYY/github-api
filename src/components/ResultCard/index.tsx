import './styles.css';

type Props = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string;
    name: string;
}

const ResultCard = ( {avatar_url,url,followers,location,name}: Props) => {
  return (
    <>
      <div className="base-card response-card">
        <div className="response-card-img">
          <img src={avatar_url} alt="" />
        </div>
        <div className="response-card-datas">
          <h5>Informações:</h5>
          <input type="text" value={'Perfil: ' + url} readOnly />
          <input
            type="text"
            value={'Seguidores: ' + followers}
            readOnly
          />
          <input
            type="text"
            value={'Localidade: ' + location}
            readOnly
          />
          <input type="text" value={'Nome: ' + name} readOnly />
        </div>
      </div>
    </>
  );
}

export default ResultCard;
