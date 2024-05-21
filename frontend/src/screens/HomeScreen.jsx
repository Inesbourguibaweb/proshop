import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products.js';
import axios from 'axios';
import Product from '../components/Product.jsx';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get('/api/products');
      console.log('products', products);
      setProducts(products.data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>List of products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
