import React, { Component } from 'react';

import {BrowserRouter as Router, Link,useLocation} from 'react-router-dom';

function useQuery(){
    const {search} =useLocation();
    return React.useMemo(()=>new URLSearchParams(search),[search]);
}

function MyQueryProductComponent() {
  let query=useQuery();
    return ( <div>
        
        hello
        {query.get("name")} 
         {query.get("pass")}
    </div> );
}

export default MyQueryProductComponent;

