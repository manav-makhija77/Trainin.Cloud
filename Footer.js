import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div className="container footer">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{top: '4rem' , position: 'relative'}}>
    <p className="col-md-4 mb-0 text-muted">© 2023 Trainin.Cloud, Inc</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
    </Link>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted"><img style={{marginRight:'0.5rem', height:'32', width:'2 ',ackgroundColor:'liceblue'}} src={require('../Images/home.png')} alt=''/></Link></li>
      <li className="nav-item"><Link to="/train" className="nav-link px-2 text-muted"><img style={{marginRight:'0.5rem', height:'32', width:'2 ',ackgroundColor:'liceblue'}} src={require('../Images/train.png')} alt='' /></Link></li>
      <li className="nav-item"><Link to="/aboutus" className="nav-link px-2 text-muted"><img style={{marginRight:'0.5rem', height:'32', width:'2 ',ackgroundColor:'liceblue'}} src={require('../Images/aboutus.png')}alt='' /></Link></li>
      <li className="nav-item"><Link to="/contactus" className="nav-link px-2 text-muted"><img style={{marginRight:'0.5rem', height:'32', width:'32',backgroundColor:'aliceblue'}} src={require('../Images/contactus.png')} alt=''/></Link></li>
      
    </ul>
  </footer>
  </div>

  )
}

export default Footer
