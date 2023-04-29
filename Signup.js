import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  document.title="Sign Up - TrainIn.Cloud";
  const history = useNavigate();
  const host = "http://localhost:5000";
  const [credential, setcredential] = useState({name:"",email:"",password:"",cpassword:""})

  const submit = async (e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credential.name ,email: credential.email , password:credential.password })
    });
    const json = await response.json();
    console.log(json);
  
    if(json.success===true){
      //Password sahi hai API call ok hai redirect kar do save the authtoken and redirect 
      localStorage.setItem('token', json.authtoken);
      history("/");
      
    }
   
}
function onchange(e) {
  setcredential({ ...credential, [e.target.name]: e.target.value })
}

  return (
    <div style={{ backgroundColor: 'antiquewhite', borderRadius: '25px', height: '35rem', top: '7rem' , position: 'relative'}}>
      <h1 style={{textAlign:'center', fontFamily: 'Bruno Ace SC'}}>SignUp in Trainin.Cloud</h1>
      <div>
     <form onSubmit={submit} className='my-5'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credential.name} onChange={onchange} id="name" name="name" aria-describedby="emailHelp" placeholder='Enter your Name' autoComplete="on" required />
                    <label htmlFor="email" className="form-label my-3">Email address</label>
                    <input type="email" className="form-control" value={credential.email} minLength={3} onChange={onchange} id="email" name="email" aria-describedby="emailHelp" placeholder='Enter your Email' autoComplete="on" required />
                    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label my-1">Password</label>
                    <input type="password" className="form-control" value={credential.password} minLength={3} onChange={onchange} autoComplete="current-password" name="password" id="password" placeholder='Enter Your Password' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" autoComplete='new-password' className="form-control" value={credential.cpassword}minLength={3}  onChange={onchange} name="cpassword" id="cpassword" placeholder='Enter Your Confirm Password' required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
    </div>
  )
}

export default Signup
