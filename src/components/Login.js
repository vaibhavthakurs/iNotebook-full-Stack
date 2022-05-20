import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:  "", password: ""});
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/auth/login", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})   
          });    
          const json = await response.json()
          console.log(json); 
          if (json.success){
              //save the authtoken and redirect
              localStorage.setItem('token', json.authToken);       
              //console.log(json.authToken);            
              navigate("/");         
              props.showAlert("Logged In Successfully", "success");
              
          }else {
            props.showAlert("Invalid Credentials", "danger");
          }
    }
        const onChange = (e) => {
            setCredentials({...credentials, [e.target.name]: e.target.value})
        }

  return (
        <div className="mt-3">
            <h2>Login to continue to iNotebook</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
        </div>
  )
};

export default Login;
