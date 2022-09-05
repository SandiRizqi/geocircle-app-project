import React from "react";
import { Col, Row, Descriptions, Skeleton } from "antd";
import MakeProposalForm from "../MakeProposalForm";

export default function ProposalPages() {
  return (
    <div className="proposal-page">
      <Row>
        <Col xs={24} xl={8}>
          <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="User Name">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
              Kebon Kcang 5, Jakarta Indonesia
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              admin@geo-circle.com
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col xs={24} xl={8}>
          <h3>Make New Proposal :</h3>
          <MakeProposalForm />
        </Col>
        <Col xs={24} xl={8}>
          <h4>List Proposal History :</h4>
          <Skeleton />
        </Col>
      </Row>
    </div>
  );
}
