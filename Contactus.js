import React from 'react'

const Contactus = () => {
  document.title = "Contact TrainIn-Cloud";
  return (
    <div id="formdiv" style={{ backgroundColor: 'antiquewhite', borderRadius: '25px', height: '25rem' }}>
      <h1 className='my-3' style={{ textAlign: 'center', fontFamily: 'Bruno Ace SC' }}>Contact Us </h1>
      <form className="container my-2" vh >
        <div className="mb-3 ">
          <label for="exampleFormControlInput1" className="form-label"><b >Email address</b></label>
          <input type="email" className="form-control" id="exampleFormControlInput1" style={{ borderRadius: '15px' }} placeholder="Enter your Email ID" required />
        </div>
        <select className="form-select form-select-lg mb-3" style={{ borderRadius: '10px' }} aria-label=".form-select-lg example">
          <option selected>Query</option>
          <option value="1">Payment Issue</option>
          <option value="2">Safety</option>
          <option value="3">Other</option>
        </select>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" style={{ borderRadius: '10px' }} className="form-label"><i>Describe Your Issue</i></label>
          <textarea placeholder='Enter your Problem Here ' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-dark" onclick="myFunction()">Submit</button>

      </form>
    </div>
  )
}

export default Contactus
