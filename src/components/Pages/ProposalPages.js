import React from 'react';
import { Col, Row } from 'antd';

export default function ProposalPages() {
  return (
    <div className="proposal-page">
      <Row>
        <Col xs={24} xl={8}>
          One of three columns
        </Col>
        <Col xs={24} xl={8}>
          One of three columns
        </Col>
        <Col xs={24} xl={8}>
          One of three columns
        </Col>
      </Row>
    </div>
  );
}
