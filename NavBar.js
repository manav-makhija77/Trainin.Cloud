import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
    const history = useNavigate();
    let location = useLocation();

    useEffect(() => {
    }, [location]);

    const logout=()=>{
        localStorage.removeItem('token');
        history("/login");
        // props.alert(" Logout Out Successfully","success")  
      }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-white bg-white fixed-top py-0">
                <div className="container py-2">

                   <Link to={'/'}><img src={require('../Images/Logo.jpg')} style={{height:'3rem'}} alt=""/></Link>

                    <span style={{ marginLeft: '1.2rem', marginTop: '0.4rem' }}><strong><h3>Trainin.Cloud</h3></strong></span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" style={{ marginLeft: "2rem" }} to="/"><img className='mx-2' style={{ height: '32', width: '32' }} src={require('../Images/home.png')} alt='' /><strong><h5 className='my-0' style={{
                                    fontSize: '1.2rem', display: 'inline-block', position: 'relative',
                                    top: '0.2rem'
                                }}>Home</h5></strong>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ marginLeft: "2rem" }} to="/train"><img style={{ marginRight: '0.5rem', backgroundColor: 'aliceblue', height: '32', width: '32' }} src={require('../Images/train.png')} alt='' /><strong><h5 style={{
                                    fontSize: '1.2rem', display: 'inline-block', position: 'relative',
                                    top: '0.2rem'
                                }}>Train</h5></strong></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link  " style={{ marginLeft: "2rem" }} to="/aboutus"><img style={{ marginRight: '0.5rem', backgroundColor: 'aliceblue', height: '32', width: '32' }} src={require('../Images/aboutus.png')} alt='' /><strong><h5 style={{
                                    fontSize: '1.2rem', display: 'inline-block', position: 'relative',
                                    top: '0.2rem'
                                }}>About Us</h5></strong></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ marginLeft: "1.7rem" }} to="/contactus"><img style={{ marginRight: '0.5rem', backgroundColor: 'aliceblue', height: '32', width: '32' }} src={require('../Images/contactus.png')} alt='' /><strong><h5 style={{
                                    fontSize: '1.2rem', display: 'inline-block', position: 'relative',
                                    top: '0.2rem'
                                }}>Contact Us</h5></strong></Link>
                            </li>
                        </ul>

    
                        {!localStorage.getItem('token','name') ?
                            <form>
                                <Link className="btn btn-primary mx-2" to='/login' role="button">Login</Link>
                                <Link className="btn btn-primary mx-2" to='/signup' role="button">Sign Up</Link>
                            </form> :<>
                            <h4 style={{top: '0.2rem',position: 'relative'}}>Welcome {props.user} </h4>
                            <button className="btn btn-primary mx-2" onClick={logout}>Logout</button>
                            </>}
                    </div>
                </div>

            </nav >
        </>
    )
}

export default NavBar
