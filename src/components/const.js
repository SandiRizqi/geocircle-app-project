import { GlobalOutlined, UserOutlined, PushpinOutlined } from '@ant-design/icons';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

export const SATELLITE_IMAGERY = [
  'SPOT',
  'PLEIADES',
  'WORLDVIEW',
  'KOMSAT',
  'PLANETSCOPE',
  'SENTINEL',
  'LANDSAT',
  'RAPIDEYE',
  'QUICKBIRD',
];

export const settingsMenu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Profile
          </a>
        ),
        icon: <UserOutlined />,
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Settings
          </a>
        ),
        icon: <SettingOutlined />
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Subscribtions
          </a>
        ),
        icon: <PushpinOutlined />
      },
      {
        key: '4',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            Quit
          </a>
        ),
      },
    ]}
  />
);

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const sideMenu = [
  getItem('Find Imagery', '1', <GlobalOutlined />),
  getItem('Proposals', '2', <CalendarOutlined />),
  getItem('Services', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
    ]),
  ]),
  getItem('My Orders', 'sub2', <SettingOutlined />, [
    getItem('Orders History', '7'),
    getItem('Orders on Progres', '8'),
  ]),
  getItem(
    <a
      href="https://www.geo-circle.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Geocircle
    </a>,
    'link',
    <LinkOutlined />
  ),
];
