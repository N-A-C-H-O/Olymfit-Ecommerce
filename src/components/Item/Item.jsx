import Card from 'react-bootstrap/Card';
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({item}) => {
  return (
    <Card style={{ width: '18rem' }} className="card my-5">
      <Card.Img variant="top" src={item.image} className="card-img" />
      <Card.Body>
        <Card.Title className='card-name text-center'>{item.name}</Card.Title>
        <Card.Text className='card-price text-center'>${item.price}</Card.Text>
        {/* <Link to={`/item/${item.id}`} className="card-btn-container">
          <Button variant="primary" className='card-btn mx-auto d-block'>Ver más</Button>
        </Link> */}
        <Link to={`/item/${item.id}`} className="card-btn btn btn-dark d-block">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}
