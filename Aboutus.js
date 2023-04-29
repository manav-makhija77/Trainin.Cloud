import React from 'react'
import { Link } from "react-router-dom";

const Aboutus = () => {
  document.title = "About TrainIn-Cloud";
  return (
    <>
      <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img className="bd-placeholder-img" width="100%" height="100%" src="61702832.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt='' />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 style={{ color: 'rgb(0, 0, 0)' }}>Everything About Trainin.Cloud .</h1>
                <p style={{ color: 'black' }}>Owners and Comapany</p>
                <p><Link className="btn btn-lg btn-dark" href="#accordionExample">Have a Look</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img className="bd-placeholder-img" width="100%" height="100%" src="61702832.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt='' />
            <div className="container">
              <div className="carousel-caption">
                <h1 style={{ color: 'black' }}>From How To book Tickets To How To Cancel Them</h1>
                <p style={{ color: 'black' }}>Refund and Cancellation</p>
                <p><Link className="btn btn-lg btn-dark" to="#accordionExample">Have a Look</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img" width="100%" height="100%" src="61702832.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt='' />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 style={{ color: 'black' }}>Privacy Policies And Safety Features </h1>
                <p style={{ color: 'black' }}>Everything Discussed Below</p>
                <p><Link className="btn btn-lg btn-dark " to="#accordionExample">Have a Look</Link></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>


        <div style={{ top: '4rem', position: 'relative' }} className="container accordion">

          <h1 className='my-3' style={{ textAlign: 'center', fontFamily: 'Bruno Ace SC' }}>About This Project </h1>

          <div className="row container" id="row">

            <div className="col-lg-4 ">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={require('../Images/customer-service.jpg')} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" alt='' />
              <title>Placeholder</title>

              <h2 className="fw-normal my-3"><b>Customer Service</b></h2>


              <p><Link className="btn btn-dark" to="/contactus">View details »</Link></p>
            </div>

            <div className="col-lg-4">
              <img className="bd-placeholder-img rounded-circle " width="140" height="140" src={require('../Images/privacy-image.jpg')} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" alt='' />
              <title>Placeholder</title>


              <h2 className="fw-normal my-3"><b>Privacy Policy</b></h2>


              <p><Link className="btn btn-dark" to="/contactus">View details »</Link></p>
            </div>

            <div className="col-lg-4 ">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={require('../Images/returns-image.jpg')} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" alt='' />
              <title>Placeholder</title>

              <h2 className="fw-normal my-3"><b>Returns</b></h2>

              <p><Link className="btn btn-dark" to="/contactus">View details »</Link></p>

            </div>
          </div>


          <br /><br /><br /><br />




          <div className="accordion" id="accordionExample">
            <div className="accordion-body">
              <strong><h2>About Trainin.Cloud </h2>
              </strong>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is Trainin.Cloud
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Trainin.Cloud is a College Project Created by 3 students Chirag , Manav and Purvesh in 2023 . </strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What are your terms of use and privacy policy?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>We take the privacy of our users very seriously! </strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                  Why is Trainin.Cloud different from other travel booking platforms?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>With unique features such as the Online/Offline Train Running Status, PNR Prediction, Refund Calculator, Station Alarm and so on, the Trainin.Cloud Trains app offers a seamless booking experience. </strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                  How do I contact Trainin.Cloud customer care?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Just Go on the Customer service section </strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                  How do I cancel my ticket on Trainin.Cloud?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Please follow the steps mentioned below to track your refund status:<br />
                    1. Log in to your Trainin.Cloud account<br />
                    2. Click on the customer service tab<br />
                    3. Select your trip from the 'MyTrips' section<br />
                    4. Click on the booking ID and check the refund status</strong>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                  How do I get a refund on a ticket booking through Trainin.Cloud?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>For refund of a confirmed booking, you need to place a cancellation request from the My Trips section of theTrainin.Cloud app.
                    For refund related to a failed booking, the amount deducted from your account will be reversed in the source account within 7 days.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
