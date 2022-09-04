import React, { useState, useEffect } from 'react';
import { Card, message, Row, Col, Badge, Descriptions, Image, Skeleton, Steps } from 'antd';
import axios from 'axios';
import { UserOutlined, SearchOutlined, SendOutlined, FileProtectOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Step } = Steps;

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
          overflowX: "scroll",
        }}
      >
        <Col
          xxl={15}
          xl={12}
          md={12}
          sm={12}
          xs={6}
          className="satellite-image-page-item"
        >
          <Row className="satellite-image-page-item-row">
            {imagery ? (
              imagery.map((img, idx) => (
                <Col
                  className="imagery-grid"
                  key={idx}
                  onClick={() => selectItem(img)}
                  xs={24}
                  sm={24}
                  xl={12}
                  md={18}
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
        <Col
          xxl={9}
          xl={12}
          md={12}
          sm={12}
          xs={18}
          className="satellite-image-page-item details"
        >
          <Descriptions
            title="Product Info"
            bordered
            style={{ marginTop: "1rem" }}
            column={{ xxl: 3, xl: 2, lg: 1 }}
            size="large"
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
            ) : <Skeleton />}
          </Descriptions>
          <div className="order-procedure">
            <h3>Order Precedure</h3>
            <Steps responsive>
              <Step status="finish" title="Login" icon={<UserOutlined />} />
              <Step
                status="wait"
                title="Find Imagery"
                icon={<SearchOutlined />}
              />
              <Step status="wait" title="Ask Proposal" icon={<SendOutlined />} />
              <Step status="wait" title="Proposal Verification" icon={<FileProtectOutlined />} />
            </Steps>
          </div>
        </Col>
      </Row>
    </div>
  );
}
