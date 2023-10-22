import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import PageNav from "../Components/PageNav";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import {AuthProvider, useAuth} from "../contexts/FakeAuthContext";


export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

   const {login,isAuthenticated } = useAuth();
   const navigate = useNavigate();

  useEffect(function(){
    if(isAuthenticated)
    navigate('/app', {replace: true} );
  },[isAuthenticated, navigate])

  function handleSubmit(e){
    e.preventDefault();

    if(email && password) login(email, password)
    
  }

  return (
    <main className={styles.login}>
      <PageNav/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          {/* <button onClick={<NavLink to="/app"/>}>Login</button> */}
          <Button type="primary" >Login</Button>
        </div>
      </form>
    </main>
  );
}
