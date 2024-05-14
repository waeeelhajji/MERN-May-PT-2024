
import './App.css';

import AnotherComp from "./components/AnotherComp"

function App() {
  const x = 3
  const message = "hello"
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>Hello React</h1>
      <p>the number of x : {x}</p>
      <p>{message} React</p>
      this is my zoo :
      {
        animals.map((eachAnimal) => {
          return <li>{eachAnimal}</li>
        })
      }

      <AnotherComp bob={message} data={animals} x={x} />
    </fieldset>
  );
}

export default App;
