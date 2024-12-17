import { useState } from 'react';
import './App.css';
import IPLTable from './IPLTable';

function App() {
  const [user,setUser] = useState(["hello"]);
  const[value,setValue] = useState();
  const handleSubmit = (e)=>{
    e.preventDefault();
    setUser([...user,value]);
  }
console.log(user);
  return (
    <div className="App">
      <IPLTable/>
    </div>
  );
}

export default App;
