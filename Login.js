import React ,{useState} from 'react'
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    document.title="Login - TrainIn.Cloud";
  // let history = useHistory;
  const history = useNavigate();
  const [credential, setcredential] = useState({email:"",password:""})
  const host = "http://localhost:5000";

  const submit = async (e)=>{
  e.preventDefault();
  const response = await fetch(`${host}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: credential.email , password:credential.password })
  });
  const json = await response.json();
 
  if(json.success===true){
    //Password sahi hai API call ok hai redirect kar do save the authtoken and redirect 
    localStorage.setItem('token', json.authtoken , 'name', json.user);
    history("/");
    let nm = json.user;
    <Navbar user={nm}/>
  }
  else{
    alert("Invalid Username or Password");
  }
  
}
function onchange(e) {
  setcredential({ ...credential, [e.target.name]: e.target.value })
}
  return (
    <div style={{ backgroundColor: 'antiquewhite', borderRadius: '25px', height: '25rem', top: '7rem' , position: 'relative'}}>

      <h1 style={{textAlign:'center', fontFamily: 'Bruno Ace SC'}}>Welcome to TrainIn.Cloud </h1>
     <form onSubmit={submit} className='my-5'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credential.email} minLength={3} onChange={onchange} autoComplete='username' id="email" name="email" aria-describedby="emailHelp" placeholder='Enter your Email' required />
                    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" autoComplete='current-password' className="form-control" value={credential.password} minLength={3} onChange={onchange} name="password" id="password" placeholder='Enter Your Password' required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Login

