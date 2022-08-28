import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css";

export const Item = ({item}) => {
  return (
    <Card style={{ width: '18rem' }} className='card my-5'>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className='card-name text-center'>{item.name}</Card.Title>
        <Card.Text className='card-price text-center'>{`$${item.price}`}</Card.Text>
        <Button variant="primary" className='card-btn mx-auto d-block'>Ver más</Button>
      </Card.Body>
    </Card>
  );
}
