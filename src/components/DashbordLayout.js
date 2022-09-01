import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Space } from 'antd';
import { Switch } from 'antd';
import { useState } from 'react';
import { settingsMenu } from './const';
import { sideMenu } from './const';
import MapCanvas from './Map/MapCanvas';



const { Header, Content, Sider } = Layout;
export default function DashbordLayout() {
    const [mode, setMode] = useState('dark');
    const [openmenu, setOpenMenu] = useState('inline')

    const changeMode = (checked) => {
        setMode(checked ? 'dark' : 'light')
    }

    const changeOpenMenu = (checked) => {
        setOpenMenu(checked ? 'inline' : 'vertical')
    }

   

  return (
    <>
      <Layout>
        <Sider 
            breakpoint="lg"
            collapsedWidth="0"
          theme={mode}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <Switch
              onChange={changeOpenMenu}
              checkedChildren="vertical"
              defaultChecked="vertical"
              unCheckedChildren="inline"
            />
          </div>
          <Menu
            defaultSelectedKeys={["1"]}
            mode={openmenu}
            theme={mode}
            items={sideMenu}
          />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
              height: "7vh",
            }}
          >
            <Menu theme={mode} mode="horizontal" className="settings">
              <div className="setting-menu-item">
                <Dropdown overlay={settingsMenu}>
                  <a>
                    <Space>
                      Profile
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
              position: "relative"
            }}
          >
            <div
              className="site-layout-background"
              style={{ margin: 0, position:'relative', bottom:0, top:0}}
            >
              <MapCanvas mode={mode}/>
            </div>
          </Content>
          
        </Layout>
      </Layout>
    </>
  );
}

