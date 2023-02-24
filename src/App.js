import React, { useState } from 'react';

const App = () => {
  const [data, setdata] = useState({
    name:""
  });
  const changeHandler =(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  return (
    <>
     <input name='name' onChange={changeHandler} type="text" placeholder='enter yoyr name' /> <br/>
     <h1>my name is {data.name}</h1>
    </>
  );
}

export default App;
