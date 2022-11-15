import './assets/styles/custom.scss'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchGitApi from 'pages/searchGitApi';


const App = () => {
  return (
    <>
      <Navbar />
      <SearchGitApi />
    </>
  );
}

export default App;
