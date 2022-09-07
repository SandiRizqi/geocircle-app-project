import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Descriptions, Skeleton, message, Table } from "antd";
import MakeProposalForm from "../MakeProposalForm";

const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  }
];

export default function ProposalPages() {
  const [proposal, setProposal] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProposal = async () => {
    axios.get('https://www.geo-circle.com/api/project/')
    .then((res) => {
      setProposal(res.data);
      setLoading(false);
    })
    .catch(() => message.error("Something error with server"));
  };

  useEffect(() => {
    getProposal();
  }, []);
  return (
    <div className="proposal-page">
      <Row>
        <Col xs={24} xl={8}>
          <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="User Name">
              Anugrah Sandi Rizqi
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">
              082170829587
            </Descriptions.Item>
            <Descriptions.Item label="Live">
              Jakarta, Indonesia
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
          {loading ? (
            <Skeleton />
          ) : (
            <Table dataSource={proposal} columns={columns} />
          )}
        </Col>
      </Row>
    </div>
  );
}
