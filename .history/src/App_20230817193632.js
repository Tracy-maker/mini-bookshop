import { useState } from "react";

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
