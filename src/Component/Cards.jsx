import Card from 'react-bootstrap/Card';
import './style/card.css'
import Logose from '../images/art-and-design 1.svg';
import Frame from '../images/Frame.svg';
import L0001 from '../images/L0001.png';
import Sport from '../images/sports-and-competition 1.svg';
function Cards() {
  //                                           All card area
  return (
    <>                                                     
      <div className='container cards-area'>
        <div className='card-txt'>
          <h6>Quality features</h6>
          <h3>Meet exciting feature of app</h3>
        </div>
        <div className='all-card'>

          <Card border="primary wow animate__animated animate__fadeInUp" style={{ width: '18rem' }}>

            <div className='logos'>
              <div className='logo logo-first'>
                <img src={Logose} alt="logo" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className='logo-title'> <h5>Unlimited Customization </h5></Card.Title>
              <Card.Text>
                <p>  Get your blood tests delivered at home collect a sample from the your blood tests.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="secondary wow animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
            <div className='logos'>
              <div className='logo logo-second'>
                <img src={Frame} alt="logo" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className='logo-title'><h5>Vector shape & resizable </h5></Card.Title>
              <Card.Text>
                <p> Get your blood tests delivered at home collect a sample from the your blood tests.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="success wow animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
            <div className='logos'>
              <div className='logo logo-third'>
                <img src={L0001} alt="logo" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className='logo-title'> <h5>Editing freedom</h5></Card.Title>
              <Card.Text>
                <p>  Get your blood tests delivered at home collect a sample from the your blood tests.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="danger wow animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
            <div className='logos'>
              <div className='logo logo-forth'>
                <img src={Sport} alt="logo" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className='logo-title'><h5>Best Award history</h5></Card.Title>
              <Card.Text>
                <p> Get your blood tests delivered at home collect a sample from the your blood tests. </p>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
    </>
  );
}

export default Cards;