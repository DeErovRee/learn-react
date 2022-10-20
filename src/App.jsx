import './App.css';
import { Message } from './components/Message';
import React, { useEffect, useState } from "react";

export const App = () => {
  const [name, setName] = useState('Hello from React!')

  return (
    <div className="App">
      <Message name={name} />
    </div>
  );
}
