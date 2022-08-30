import React from 'react'
import { Layout, Divider } from 'antd';
import {Space} from 'antd';
import DatePickerComponent from './DatePickerComponent';
import UploadFileCompnent from './UploadFileCompnent';
import ImageryListComponent from './ImageryListComponent';
import AdditionalFilterComponent from './AdditionalFilterComponent';
import MapCanvas from './Map/MapCanvas';
import { SearchOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';




const { Header, Sider, Content } = Layout;



export default function LayoutApp() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout>
        <Sider className="sidebar" width={400} trigger={null} collapsible collapsed={collapsed}>
          <div className="DataPicker">
            <ImageryListComponent />
            <Space direction="vertical">
              <DatePickerComponent />
              <UploadFileCompnent />
            </Space>
            <Divider />
            <AdditionalFilterComponent />
            <Button>Reset</Button>
            <Button icon={<SearchOutlined />}>Search</Button>
          </div>
        </Sider>
        <Layout>
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined: MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content className="content">
            <MapCanvas />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
