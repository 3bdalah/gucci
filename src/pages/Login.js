import React,{useState,useEffect} from "react";

// handle user 
import {useHistory} from 'react-router-dom';


export default function Login() {
  const history = useHistory();
  // state value  
  let [email,setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username,setUsername] = useState("");
  let [isMember,setIsMember] = useState(false);
  let isEmpty = true;
  const toggleMember = () => {

  }
  const handleSubmit = async (e) => {

  }
  return (
    <section className="form section">
     <h2 className="section-title">{isMember? "sign in " : "register"}</h2>
     <form className="login-form">{}
     <div className="form-control">
       <label htmlFor="email">email</label>
       <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
     </div>
     <div className="form-control">
       <label htmlFor="password">password</label>
       <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
     </div>
      {!isMember && (
        <div className="form-control">
          <label htmlFor="username">username</label>

          <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
      )};
      {isEmpty  && (<p className="form-empty">please fill out all form fields </p>)}
      {!isEmpty && (<button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>)}
     
     <p className="register-link">
       {isMember ? "need  to register": "already a member"}
       <button  type="button" onClick={toggleMember}>click here</button>
     </p>
     </form>
    </section>
  );
 
}
