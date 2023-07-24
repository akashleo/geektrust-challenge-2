import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductListing from './ProductListing';
import ShoppingCart from './ShoppingCart';
import { products} from "./products.js";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      )
    );
  };

  const handleDeleteItem = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantity: prevItem.quantity - 1 }
          : prevItem
      )
    );
  };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>Online Store</h1>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={16}>
            <ProductListing
              products={products}
              onAddToCart={handleAddToCart}
            />
          </Col>
          <Col xs={24} md={8}>
            <ShoppingCart
              cartItems={cartItems}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDeleteItem={handleDeleteItem}
            />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Online Store ©2023</Footer>
    </Layout>
  );
};

export default App;
