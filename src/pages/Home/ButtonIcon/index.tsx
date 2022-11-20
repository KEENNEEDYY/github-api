import { Link } from 'react-router-dom';
import './styles.css';

const ButtonIcon = () => {
    return(
        <Link to="/searchGitApi">
            <button className="btn btn-primary btn-icon">
                <h6>Começar</h6>
            </button>
        </Link>            
    );
}

export default ButtonIcon;