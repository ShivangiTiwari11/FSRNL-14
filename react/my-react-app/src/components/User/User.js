import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './User.css'
import {Link} from 'react-router-dom';

function User({userProp}){
  let data = userProp.user;
  return (
    <div  className='user-div'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.picture} />
      <Card.Body>
        <Card.Title>{data.firstName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`users/${data.id}`} >
        <Button  variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
   
  );
}

export default User;