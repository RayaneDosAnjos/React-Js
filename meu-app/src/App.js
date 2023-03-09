import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter'
function App() {
  return (
    <div>
    <Header name="ProgramadorBr" links={["Sobre","Comprar","Contato"]}></Header>
    <Counter></Counter>
    </div>
  )
  
}


export default App;


