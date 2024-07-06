import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

MainLayout

const ItemListContainerComponent = ({products}) => {

  return products.map ((product) =>{
    return  (   
      <Card key={product.id} style={{ width: '18rem', margin: '15px' }}>
        <Card.Img variant="top" src={product.thumbnail } />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Link to= {`/item/${product.id}`}>ir a detalle</Link>
        </Card.Body>
      </Card>   
    ); 
  })
 
};

export default ItemListContainerComponent
