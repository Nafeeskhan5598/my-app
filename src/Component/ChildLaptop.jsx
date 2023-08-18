// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style/ChildLaptop.css';
function ChildLaptop(props) {
    return (
        <>
            <div className='child-laptop'>
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={props.src} className='lap-img' />
                    <Card.Body>
                        <div className='child-txt'>
                            <Card.Title> <h5 className='child-title'> {props.Title} </h5> </Card.Title>

                            <div className='comment-area'>
                                <div className='comment-img-new'>
                                    <img src={props.cimg} className='comment-img' />
                                </div>

                                <Card.Text>
                                    <div className='comment-txt'>
                                        {props.comment}
                                    </div>
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ChildLaptop;