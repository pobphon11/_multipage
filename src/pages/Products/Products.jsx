import './Products.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products({ products, carts, setCarts }) {
  return (
    <div className="Products-container">
      <div className="products-items-container">
        {products.map((product, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.price}
              </Card.Text>
              {carts.find((cart) => cart.id === product.id) ?(
                <span className='badge bg-danger'>Added </span>
              ) : (
                
              <Button variant="outline-primary" onClick={() => setCarts([...carts, product])}>
                Add to Cart
              </Button>
              )}                  

            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
