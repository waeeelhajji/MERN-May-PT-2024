
import './App.css';
import { Link, Route, Routes} from "react-router-dom"
import Main from './components/Main';
import OneMovie from './components/OneMovie';
import CreateMovie from './components/CreateMovie'
import UpdateMovie from './components/UpdateMovie'

function App() {
  return (
    <div className="App">
      <h1>Movies 🍿🎥🎞️</h1>
      <Link to='/movies/create'>ADD A MOVIE</Link>
      <Routes>
        {/* DASHBOARD */}
        <Route path='/' element={<Main />} />
        {/* ONE MOVIE */}
        <Route path='/movies/:movie_id' element={<OneMovie />} />
        {/* CREATE */}
        <Route path='/movies/create' element={<CreateMovie/>} />
        {/* UPDATE  */}
        <Route path="/movies/update/:movie_id" element={<UpdateMovie />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
