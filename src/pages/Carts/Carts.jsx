import '/src/pages/Carts/Carts.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carts( {carts, setCarts} ) {
    return ( 
        <div className='carts-container'>
            <div className="carts-items-container">
        {carts.map((cart, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cart.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{cart.title}</Card.Title>
              <Card.Text>
                {cart.price}
              </Card.Text>
              <Button variant="outline-primary" onClick={() => setCarts(carts.filter((cart) => cart.id !== cart.id))}>
                Remove form Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h4>item: {carts.length} items - Total price ${carts.reduce((total, cart) => total + cart.price, 0)}</h4>
      <button className='btn btn-warning '>Check out</button>
        </div>
     );
}

export default Carts;