import React,{useState,useEffect} from "react";

// handle user 
import {useHistory} from 'react-router-dom';


export default function Login() {
  const history = useHistory();
  // state value  
  let [email,setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [usename,setUserName] = useState("default");
  
  let [isMember,setIsMember] = useState(true);
  let isEmpty = false;
  const toggleMember = () => {

  }
  const handleSubmit = async (e) => {

  }
  return <h1>hello from login page</h1>;
 
}
