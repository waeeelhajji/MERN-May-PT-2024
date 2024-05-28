
import './App.css';
import Home from './components/Home'
import Form from './components/Form'
import Heroes from './components/Heroes'
import About from './components/About'
import { Route, Routes, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Error from './components/Error';




function App() {
  return (
    <fieldset className="App">
      <legend>App.jsx</legend>
      <h1>routing with heroes 🦸‍♂️🦸‍♀️</h1>
      {/* <a href="/home">Home</a> */}
      {/* anchor Tag is NO NO in React  */}
      <Link to="/home">Home 🏡</Link>
      <Link to="/form">form 📝</Link>
      <Link to="/heroes">Heroes 🦸‍♀️</Link>
      {/* Theater */}
      <Routes>
        {/* Act 1 */}
        <Route path="/home" element={<Home />} />
        {/* Act 2 */}
        <Route path="/form" element={<Form />} />
        {/* Act 3 */}
        <Route path="/heroes" element={<Heroes />} />
        {/* Act 4  */}
        <Route path="/about" element={<About />} />
        {/* Act 5  */}
        <Route path="/hero/:num" element={<Hero />} />
        {/* Act 6  */}
        <Route path="/error" element={<Error />} />


      </Routes>

    </fieldset>
  );
}

export default App;
