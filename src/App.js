import { useState } from 'react';
import BookCreate from './components/BookCreate';
function App() {

  const [books,setBooks]=useState([]);

  

  return <div><BookCreate/></div>;
}

export default App;
