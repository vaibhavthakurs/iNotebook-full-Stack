import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", email:  "", password: "", cpassword: ""});   //ye hmari requirement h
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {name, email, password } = credentials;   //ye hum credentials se bhr nikalenge - name,email,pass etc.
        const response = await fetch("http://localhost:5001/api/auth/createuser", {
          
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password}) //ye teen cheez bhejenge hm then sign up hoga  
          });    
          const json = await response.json()
          console.log(json);      // jo signup k baad milega usse console kr rhe h
          if (json.success){
              //save the authtoken and redirect
              localStorage.setItem('token', json.authToken);
              navigate("/");    //token leke redirect krdnge
              props.showAlert("Account Created Successfully", "success");
          }else {
              props.showAlert("Invalid Details", "danger");
          }
    }
        const onChange = (e) => {
            setCredentials({...credentials, [e.target.name]: e.target.value})
        }


  return (
    <div className="container mt-2">
         <h2 className="my-3">Create an account to use iNotebook</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Name"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required placeholder="Password"/>
        </div>
        <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required placeholder="Password"/>
        </div>        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)
};

export default Signup;
