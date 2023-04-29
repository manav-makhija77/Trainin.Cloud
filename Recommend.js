import React from 'react'
import { Link } from "react-router-dom";


const Recommend = () => {
    return (
        <>
            <div style={{ top: '5rem', position: 'relative' }}>
                <div className="container rec">
                    <b>Recommanded For You</b>
                </div>
                <div className="container  ">


                    <div className="card mb-3 card1 " style={{maxHeight:'300px'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={require('../Images/hill-station.jpg')} height={'100%'} width={'90%'} alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Hill Stations</h5>
                                    <p className="card-text">Enjoy the Journey Through Train on these tracks <b> Listed Below</b></p>
                                    <p className="card-text"><small className="text-muted"> <b className='text-bold'>List of Hill Railways :</b> <br /> 1 Darjeeling Himaliyan Railway <br /> 2 Nilgiri Mountain Railway <br />3 Kalka Shimla Railway <br /> 4 Matheran Hill Railway <br /> 5 Kangra Valley Railway  Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container cer">
  <b>Popular Routes</b>
</div>

<div id="train" className="container">
  
  <div className="domestic-train-list-container   container d-flex  flex-wrap justify-content-center ">
    <div className="domestic-train-list ">
    <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/flightshome/79ee38cdbe961dccc3474b0bb92a3e06-nehrw.png" alt=''/>
    <div className="domestic-train-list-header" >Mumbai Railway</div>
    <div>From: <Link className="domestic-train-routes-links" to="/train">Goa, </Link>
      <Link className="domestic-train-routes-links" to="/train">Delhi, </Link>
      <Link className="domestic-train-routes-links" to="/train">Bangalore, </Link>
      <Link className="domestic-train-routes-links" to="/train">Ahmedabad </Link>
    </div></div><div className="domestic-train-list">
      <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/flightshome/4c3658a4867b64f0cd3806ba996b65b9-hgqbk.png" alt=''/>
      <div className="domestic-train-list-header" >Delhi Railway</div>
      <div>From: <Link className="domestic-train-routes-links" to="/train">Mumbai, </Link>
        <Link className="domestic-train-routes-links" to="/train">Goa, </Link>
        <Link className="domestic-train-routes-links" to="/train">Bangalore, </Link>
        <Link className="domestic-train-routes-links" to="/train">Pune </Link>

      </div></div><div className="domestic-train-list">
        <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/flightshome/2aa9b6f5152b47e8fe6f3c6869005b64-kwkop.png" alt=''/>
        <div className="domestic-train-list-header" >Kolkata Railway</div>
        <div>From: <Link className="domestic-train-routes-links" to="/train">Mumbai, </Link>
          <Link className="domestic-train-routes-links" to="/train">Delhi, </Link>
          <Link className="domestic-train-routes-links" to="/train">Bangalore, </Link>
          <Link className="domestic-train-routes-links" to="/train">Bagdogra </Link></div>
        </div>
        <div className="domestic-train-list">
          <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/flightshome/d68be4fa4a16e49ad3c604ff56a6e381-aavhe.png" alt=''/>
          <div className="domestic-train-list-header">Chennai Railway</div>
          <div>From: <Link className="domestic-train-routes-links" to="/train">Mumbai, </Link>
            <Link className="domestic-train-routes-links" to="/train">Delhi, </Link>
            <Link className="domestic-train-routes-links" to="/train">Madurai, </Link>
            <Link className="domestic-train-routes-links" to="/train">Coimbatore </Link>
          </div>
        </div>
          <div className="domestic-train-list">
            <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/flightshome/233a5d159be13a22fe3c08f5d2843886-znstx.png" alt=''/>
            <div className="domestic-train-list-header" >Hyderabad Railway</div>
            <div>From: <Link className="domestic-train-routes-links" to="/train">Mumbai, </Link>
              <Link className="domestic-train-routes-links" to="/train">Goa, </Link>
              <Link className="domestic-train-routes-links" to="/train">Bangalore, </Link>
              <Link className="domestic-train-routes-links" to="/train">Delhi </Link>
            </div>
          </div>
            <div className="domestic-train-list">
              <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/flightshome/ff1243e5e4925d7d2a0b7132efd1f028-dyasj.png" alt=''/>
              <div className="domestic-train-list-header" >Ahemdabad Railway</div>
              <div>From: <Link className="domestic-train-routes-links" to="/train">Mumbai, </Link>
                <Link className="domestic-train-routes-links" to="/train">Delhi, </Link>
                <Link className="domestic-train-routes-links" to="/train">Bangalore, </Link>
                <Link className="domestic-train-routes-links" to="/train">Goa </Link>
              </div>
            </div>
            <div className="domestic-train-list">
              <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/home/d924fcc85d0901057de8bc07a01321c9-ycbdq.png" alt=''/>
              <div className="domestic-train-list-header" >Bangalore Railway</div>
              <div>From: <Link className="domestic-train-routes-links" to="/train">Mumbai, </Link>
                <Link className="domestic-train-routes-links" to="/train">Delhi, </Link>
                <Link className="domestic-train-routes-links" to="/train">Goa, </Link>
                <Link className="domestic-train-routes-links" to="/train">Hyderabad </Link>
              </div>
            </div>
            <div className="domestic-train-list">
              <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/home/63de17e2b3f2163c39ccffdb7b1ad719-oikej.png" alt=''/>
              <div className="domestic-train-list-header" >Pune Railway</div>
              <div>From: <Link className="domestic-train-routes-links" to="/train">Goa, </Link>
                <Link className="domestic-train-routes-links" to="/train">Delhi, </Link>
                <Link className="domestic-train-routes-links" to="/train">Bangalore, </Link>
                <Link className="domestic-train-routes-links" to="/train">Nagpur </Link>
              </div>
            </div>
            <div className="domestic-train-list">
              <img className="bd-placeholder-img rounded-circle" width="120" height="120" src="https://images.ixigo.com/image/upload/flightshome/32e5ac30faeeacef567a44509e8b707a-hlyfd.png" alt=''/>
              <div className="domestic-train-list-header" >Goa Railway</div>
              <div >From: <Link className="domestic-train-routes-links" to="/train">Mumbai, </Link>
                <Link className="domestic-train-routes-links" to="/train">Delhi, </Link>
                <Link className="domestic-train-routes-links" to="/train">Bangalore, </Link>
                <Link className="domestic-train-routes-links" to="/train">Hyderabad </Link>
              </div>
            </div>
          </div>
        </div>

            </div>
        </>
    )
}

export default Recommend
