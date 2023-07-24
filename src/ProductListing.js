import React, { useState } from 'react';
import { Input, Row, Col } from 'antd';
import ProductCard from './ProductCard';

const ProductListing = ({ products, onAddToCart }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Input.Search
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListing;
