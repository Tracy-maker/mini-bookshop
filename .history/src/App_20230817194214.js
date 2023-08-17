import { useState } from "react";

function getRandomAnimal(){
  const animals=['bird','cat','cow','dog','gator','horse'];
  return animals[Math.random()*animals.length]
}


function App() {

  const [animals,setAnimals]=useState([]);
  const handleClick=()=>{
    setAnimals([...animals,getRandomAnimal()])
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
