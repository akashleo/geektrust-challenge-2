import React from 'react';
import { List, Button, Divider } from 'antd';

const ShoppingCart = ({ cartItems, onIncreaseQuantity, onDeleteItem }) => {
  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      <List
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item>
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <Button onClick={() => onIncreaseQuantity(item)}>+</Button>
              <Button onClick={() => onDeleteItem(item)}>-</Button>
            </div>
          </List.Item>
        )}
      />
      <Divider />
      <p>Total Amount: {getTotalAmount()}</p>
    </div>
  );
};

export default ShoppingCart;
