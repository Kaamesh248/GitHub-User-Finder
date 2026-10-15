import { useState } from "react"

function App(){
  const[name,setName]=useState("")
  const[result,setresult]=useState([])

  users=[
    {name:"Kaamesh",repositories:50,followers:50},
    {name:"Mufeed",repositories:100,followers:800},
    {name:"Aravind",repositories:60,followers:250},
    {name:"Pravin",repositories:20,followers:100},
    {name:"Mohammed",repositories:48,followers:500},
    {name:"Harris",repositories:39,followers:200},
    {name:"Samuel",repositories:75,followers:400},
  ];

  function search(namey){
    setResult(users.filter((i)=>i.name===namey))
   }

  return(
    <div>
      <h1> GitHub Username Finder </h1>
      <input value={name} onChange={(e)=>setResult(e.target.value)}
      />
      <button onClick={search}> Search </button>
      {result.map((x,y)=>(
        <p key={b}> {a} </p>
      ))}
    </div>
  );
}

export default App;