import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  ControlFilled,
  TagFilled,
  TaobaoCircleFilled,
  TagsTwoTone,
} from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';

const { Sider } = Layout;

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: <Link to="profile">Profile Management</Link>,
  },
  {
    key: '2',
    icon: <TaobaoCircleFilled />,
    label: <Link to="alltask">All Task</Link>,
  },
  {
    key: '3',
    icon: <TagFilled />,
    label: <Link to="addtask">Add Task</Link>,
  },
  {
    key: '4',
    icon: <ControlFilled />,
    label: <Link to="task-category">Task Category</Link>,
  },
  {
    key: '5',
    icon: <TagsTwoTone />,
    label: <Link to="content">Content</Link>,
  },
];

const Sidebar = () => {
  const { logOut, user } = useAuth();

  return (
    <div>
      <Sider style={{ height: '120vh' }} breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <div
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '15px',
          }}
        >
          <Link to="/">TaskHub</Link>
        </div>
        {/* Use `items` prop instead of mapping each item with `<Menu.Item>` */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
        <div className="ms-6 mt-4">
          <button
            onClick={logOut}
            className="px-14 py-2 rounded bg-blue-500 text-white"
          >
            Logout
          </button>
        </div>
        <div className="avatar ms-16 mt-6">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={
                user?.photoURL ||
                'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg'
              }
              alt="User Avatar"
            />
          </div>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
