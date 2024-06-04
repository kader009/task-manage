import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Row, Col, Card, Typography } from 'antd';
const { Title, Text } = Typography;

const DashboardHome = () => {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const tasks = [
    { id: 1, title: 'Task 1', status: 'In Progress' },
    { id: 2, title: 'Task 2', status: 'Completed' },
    { id: 3, title: 'Task 3', status: 'Pending' },
  ];
  
  return (
    <div className="mx-4 my-4">
      <Row gutter={[16, 16]} className="mt-4 mb-4">
        {tasks.map((task) => (
          <Col xs={24} sm={12} lg={8} key={task.id}>
            <Card>
              <Title level={4}>{task.title}</Title>
              <Text>Status: {task.status}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Title level={3}>Task Overview</Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome;
