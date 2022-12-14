import {useState,useContext} from 'react';
import mycontext from './myglobalcontext';
//import React from 'react';

//const mycontext=React.createContext();


function UseContextDemo() {
    const [name,setName]=useState("Mohan");
    const [pass,setPass]=useState("abcd");
    return ( 
    <div>
        <mycontext.Provider value={{v1:[name,setName],v2:[pass,setPass]}}>
            <MyChild myvar="thank you!"/>
        </mycontext.Provider>
    </div> 
    );
}

export default UseContextDemo;

function MyChild(props){
    const {v1,v2} =useContext(mycontext);
    const [a,b]=v1;
    const [c,d]=v2;
    return (
        <div>
           it is context value {a}  it is context value {c}
           {props.myvar}
        </div>
    )
}