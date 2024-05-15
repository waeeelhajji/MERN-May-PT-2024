
import './App.css';
import { useState } from 'react'
import Ninja from './components/Ninja';

function App() {

  //?-- Create STATE FOR THIS COMPONENT
  const [data, setData] = useState(5)
  //!---Getter---Setter--

  const [ninjaObj, setNinjaObj] = useState({
    name: "Raphael",
    powerLevel: 100
  })


  function IncrementNumber() {
    // console.log("This button has been clicked!")
    // This Function changes the State
    //!1- data++
    //!2- setData(data++)
    setData(data + 1)
    console.log(data) //! We cannot see this change SetState is async 
  }

  // Ninja Level UP
  const PowerLevelIncrement = () => {
    console.log("It Working")
    setNinjaObj({ ...ninjaObj, powerLevel: ninjaObj.powerLevel + 1 })
  }




  return (
    <fieldset className="App">
      <legend>App.jsx</legend>
      <h1>State :{data}</h1>
      <button onClick={IncrementNumber}>Increment</button>

      <hr />
      {/* <h3>this State of our Ninja {JSON.stringify(ninjaObj)}</h3>s */}
      <button onClick={PowerLevelIncrement}>Level UP</button>

      <Ninja ninja={ninjaObj} />
    </fieldset>
  );
}

export default App;
