import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  SettingFilled,
  RollbackOutlined,
  TagFilled,
  TaobaoCircleFilled,
} from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';

const { Sider } = Layout;

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Profile Management',
    path: 'profile',
  },
  {
    key: '2',
    icon: <TaobaoCircleFilled />,
    label: 'All Task',
    path: 'alltask',
  },
  { key: '3', icon: <TagFilled />, label: 'Add Task', path: 'addtask' },
  {
    key: '4',
    icon: <RollbackOutlined />,
    label: 'Roles & Users',
    path: 'roles-user',
  },
  { key: '5', icon: <SettingFilled />, label: 'Settings', path: 'settings' },
];

const Sidebar = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <Sider style={{ height: '100vh' }} breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <div
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '15px',
          }}
        >
          <Link to={'/'}>TaskHub</Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <div className="ms-6">
          <button onClick={logOut} className="px-14 py-2 rounded bg-blue-500 text-white">
            Logout
          </button>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
