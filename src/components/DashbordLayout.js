import React from 'react';
import { UserOutlined, NotificationOutlined } from '@ant-design/icons';
import {
  Layout, Menu, Dropdown, Space, Badge
} from 'antd';
import { Switch } from 'antd';
import { useState } from 'react';
import { settingsMenu } from './const';
import { sideMenu } from './const';
import { Pages } from './const';

const { Header, Content, Sider } = Layout;
export default function DashbordLayout() {
  const [mode, setMode] = useState('dark');
  const [openmenu, setOpenMenu] = useState('inline');
  const [selectedMenu, setSelectedMenu] = useState('1');

  const page = Pages.find((_item) => _item.key[0] === selectedMenu);

  const changeMode = (checked) => {
    setMode(checked ? 'dark' : 'light');
  };

  const changeOpenMenu = (checked) => {
    setOpenMenu(checked ? 'inline' : 'vertical');
  };

  const selectMenu = (item) => {
    setSelectedMenu(item.key);
  };

  return (
    <div>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" theme={mode}>
          <div className="logo">
            <Switch
              onChange={changeOpenMenu}
              checkedChildren="vertical"
              defaultChecked="vertical"
              unCheckedChildren="inline"
            />
          </div>
          <Menu
            selectedKeys={[selectedMenu]}
            mode={openmenu}
            theme={mode}
            items={sideMenu}
            onClick={selectMenu}
            style={{
              height: "93vh",
            }}
          />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
              height: "6vh",
            }}
          >
            <Menu theme={mode} mode="horizontal" className="settings">
              <div className="setting-menu-item">
                <Badge dot>
                  <a href="#/">
                    <Space>
                      <NotificationOutlined />
                    </Space>
                  </a>
                </Badge>
              </div>
              <div className="setting-menu-item">
                <Dropdown overlay={settingsMenu}>
                  <a href="#/">
                    <Space>
                      <UserOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
              <div className="setting-menu-item">
                <Switch
                  defaultChecked
                  onChange={changeMode}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                  checked={mode === "dark"}
                />
              </div>
            </Menu>
          </Header>
          <Content
            style={{
              margin: "0",
              position: "relative",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                margin: 0,
                position: "relative",
                bottom: 0,
                top: 0,
              }}
            >
              {page.content}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
