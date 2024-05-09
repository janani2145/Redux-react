import React, { useState } from "react";
import { CustomerView } from "./CustomerView";

export function ComponentAdd(){
    const [input, setInput] = useState("");
    const [customers,setCustomers]=useState([]);

    function addCustomer(){
        if(input){
setCustomers((previousState)=>[...previousState,input])
setInput("");
        }
    }

    return <><div>
        <h1> Component New User
        </h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
    </div>
    <CustomerView customers={customers}/>
    </>
   
}