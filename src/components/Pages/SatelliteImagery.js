import React, { useState, useEffect } from 'react';
import { Card, message, Row, Col, Badge, Descriptions, Image } from 'antd';
import axios from 'axios';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

export default function SatelliteImagery() {
  const [products, setProducts] = useState([]);
  const imagery = products.filter((_items) => _items.category === 1);
  const services = products.filter((_items) => _items.category === 3);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectItem = (item) => {
    setSelectedProduct(item);
  };

  const getProducts = async () => {
    axios
      .get("https://www.geo-circle.com/api/product/")
      .then((data) => setProducts(data.data))
      .then(() => setLoading(false))
      .catch(() => message.error("Something error with server"));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="satellite-image-page">
      <Row>
        <Col span={15} className="satellite-image-page-item">
          <Card title="Satellite Imagery" loading={loading}>
            {imagery.map((img, idx) => (
              <Card.Grid
                style={gridStyle}
                key={idx}
                onClick={() => selectItem(img)}
              >
                <Image
                  width={200}
                  src={img.image}
                />
              </Card.Grid>
            ))}
          </Card>
          <Card title="Services" loading={loading}>
            {services.map((img, idx) => (
              <Card.Grid
                style={gridStyle}
                key={idx}
                onClick={() => selectItem(img)}
              >
                {img.title}
              </Card.Grid>
            ))}
          </Card>
        </Col>
        <Col span={9} className="satellite-image-page-item">
          <Descriptions title="Product Info" bordered>
            {selectedProduct ? (
              <>
                <Descriptions.Item label="Product">
                  {selectedProduct.title}
                </Descriptions.Item>
                <Descriptions.Item label="Price">
                  {selectedProduct.price} / {selectedProduct.satuan}
                </Descriptions.Item>
                <Descriptions.Item label="Min. Order">
                  {selectedProduct.min_order} {selectedProduct.satuan}
                </Descriptions.Item>
                <Descriptions.Item label="Warranty">
                  {selectedProduct.warranty}
                </Descriptions.Item>
                <Descriptions.Item label="Return Policy" span={2}>
                  {selectedProduct.return_policy}
                </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                  <Badge status="processing" text="Availlable" />
                </Descriptions.Item>
                <Descriptions.Item label="Tax" span={3}>
                  11%
                </Descriptions.Item>
                <Descriptions.Item label="Product Description">
                  {selectedProduct.shortdesc}
                </Descriptions.Item>
              </>
            ) : null }
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}
