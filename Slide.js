import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

function IndividualIntervalsExample() {
  return (
    <Carousel className='position-relative' style={{width:'121%',left:'-135px'}}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require('../Images/train-image-1.jpg')}
          alt="First slide"
          style={{}}
        />
        <Carousel.Caption>
          <h1 style={{textShadow: '2px 2px black'}}>Book your Happiness</h1>
          <h6>Book Your Journey in Indian Trains</h6>
          <p><Link className="btn btn-lg btn-primary btn-sm my-15" to="/train">Book Your Travel</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require('../Images/train-image-2.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 style={{textShadow: '2px 2px black', color : 'white'}}>Plan Your Journey</h1>
          <h6 style={{textShadow: '1px 1px white', color: 'black'}} >Make this Weekend your one of the best</h6>
          <p><Link className="btn btn-lg btn-primary btn-sm my-8" to="/train">Book Tickets</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require('../Images/train-image-3.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 style={{textShadow: '2px 2px black'}}>To Your Destination</h1>
          <h6>Find a Flexible Train for your next trip</h6>
          <p><Link className="btn btn-lg btn-primary btn-sm my-8" to="/train">Search for Train</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;