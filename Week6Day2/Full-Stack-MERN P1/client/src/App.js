import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Main from './components/Main';
import OneMovie from './components/OneMovie';

function App() {
  return (
    <div className="App">
      <h1>Movies 🍿🎥🎞️</h1>
      <Routes>
        {/* DASHBOARD */}
        <Route path='/' element={<Main />} />
        {/* ONE MOVIE */}
        <Route path='/movies/:movie_id' element={<OneMovie />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
