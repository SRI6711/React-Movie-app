import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import { Routes , Route} from 'react-router-dom';
import "./css/App.css"
import { MovieProvider } from './context/MovieContext';

function App(){
  return (
    <div className='content'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
