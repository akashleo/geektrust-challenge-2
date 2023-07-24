import React from 'react';
import { Card, Button } from 'antd';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card
      cover={<img alt={product.name} src={product.imageURL} />}
      title={product.name}
    >
      <p>Price: {product.price}</p>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
