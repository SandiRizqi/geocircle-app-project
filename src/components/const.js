import { GlobalOutlined, UserOutlined, PushpinOutlined, BarChartOutlined } from '@ant-design/icons';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import ProposalPages from './Pages/ProposalPages';
import MapCanvas from './Map/MapCanvas';
import SatelliteImagery from './Pages/SatelliteImagery';
import PeformancePage from './Pages/PeformancePage';

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
            href="https://www.geo-circle.com"
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
            href="https://www.geo-circle.com"
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
            href="https://www.geo-circle.com/products"
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
  getItem('Products', 'sub1', <AppstoreOutlined />, [
    getItem('Satellite Imagery', '3', <AppstoreOutlined />),
    getItem('Analytics', '4'),
    getItem('Geo-AI', 'sub1-2', null, [
      getItem('Software', '5'),
      getItem('Services', '6'),
    ]),
  ]),
  getItem('My Orders', 'sub2', <SettingOutlined />, [
    getItem('Orders History', '7'),
    getItem('Orders on Progres', '8'),
  ]),
  getItem('Peformance', '9', <BarChartOutlined />),
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

export const Pages = [
  {
    key: '1',
    content: <MapCanvas />,
    label: 'Find Imagery'
  },
  {
    key: '2',
    content: <ProposalPages />,
    label: 'Proposals'
  },
  {
    key: '3',
    content: <SatelliteImagery />,
    label: 'Satellite Imagery'
  },
  {
    key: '9',
    content: <PeformancePage />,
    label: 'Peformace'
  }
];
