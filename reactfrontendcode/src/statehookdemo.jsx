
import {useState,useEffect} from 'react';

function StateHooks() {
    const [name,setName]=useState("Rajesh");
    const [pass,setPass]=useState("abcd");
    const [email,setEmail]=useState("Rajesh@gmail.com");
    const [address,setAddress]=useState("Bangalore");

  useEffect(()=>{
    console.log(`this is use effect ${name}`);
  },[name]);
  useEffect(()=>{
    console.log(`this is use effect ${pass}`);
  },[pass]);
  useEffect(()=>{
    console.log(`this is use effect ${email}`);
  },[email]);
  useEffect(()=>{
    console.log(`this is use effect ${address}`);
  },[address]);

    return ( <div>

      Name :  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

      Pass :  <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} />

      Email :  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />

      Address :  <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />

      <h1>My name is {name}</h1>
    </div> );
}

export default StateHooks;