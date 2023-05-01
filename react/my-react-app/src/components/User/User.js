import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './User.css'

function User(props){
  let data = props.userData;
  return (
    <div className='user-div'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.picture} />
      <Card.Body>
        <Card.Title>{data.firstName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   
  );
}

export default User;