import React, { useState, useEffect } from 'react';
import { Card, message, Row, Col, Badge, Descriptions, Image, Skeleton } from 'antd';
import axios from 'axios';

const { Meta } = Card;

export default function SatelliteImagery() {
  const [products, setProducts] = useState([]);
  const imagery = products.filter((_items) => _items.category === 1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectItem = (item) => {
    setSelectedProduct(item);
  };

  const getProducts = async () => {
    axios
      .get("https://www.geo-circle.com/api/product/")
      .then((data) => setProducts(data.data))
      .catch(() => message.error("Something error with server"));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="satellite-image-page">
      <Row
        style={{
          maxHeight: "94vh",
        }}
      >
        <Col span={15} className="satellite-image-page-item">
          <Row className="satellite-image-page-item-row">
            {imagery ? (
              imagery.map((img, idx) => (
                <Col
                  className="imagery-grid"
                  key={idx}
                  onClick={() => selectItem(img)}
                  xs={24}
                  xl={8}
                  md={12}
                  xxl={6}
                >
                  <Card
                    hoverable
                    style={{
                      width: "100%",
                    }}
                    className="imagery-grid-item"
                    cover={<Image alt={img.title} src={img.image} />}
                  >
                    <Meta title={img.title} description={img.shortdesc} />
                  </Card>
                </Col>
              ))
            ) : (
              <Skeleton />
            )}
          </Row>
        </Col>
        <Col span={9} className="satellite-image-page-item">
          <Descriptions
            title="Product Info"
            bordered
            style={{ marginTop: "1rem" }}
          >
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
                  {selectedProduct.description}
                </Descriptions.Item>
              </>
            ) : null}
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}
