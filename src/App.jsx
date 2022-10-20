import './App.css';
import { Chield } from './components/Chield';
// import { Form } from './components/Form';
// import { Form as FormClass} from './class-components/Form';
// import { Count as CountClass} from './class-components/Count';
import { Count } from './components/Count';
import React, { useEffect, useState } from "react";

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)


  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      {/* <CountClass count={10}/>
      <hr/>
      <FormClass /> */}

      <Count />
      <hr />
      <h3>Parent component</h3>
      <p>{count}</p>
      <input onChange={handleChangeName} />
      <h3>Chield component</h3>
      <Chield name={name} handleChangeCount={setCount}/>
    </div>
  );
}

export default App;
