import React from 'react';
import { Col, Row, Descriptions } from 'antd';
import YearsTransfer from '../YearsTransfer';

export default function ProposalPages() {
  return (
    <div className="proposal-page">
      <Row>
        <Col xs={24} xl={8}>
          One of three columns
        </Col>
        <Col xs={24} xl={8}>
          <YearsTransfer />
        </Col>
        <Col xs={24} xl={8}>
          <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}
