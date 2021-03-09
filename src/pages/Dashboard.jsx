import React, { useState, useEffect, useCallback } from "react";
import TableUsers from "../components/Tables/TableUsers";
import { getUserDataToken } from "../utils/authHelpers";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";
import { IoIosAdd, IoIosPerson, IoIosSearch } from "react-icons/io";
import api from "../api";
import {
  fetchUsersError,
  fetchUsersPending,
  fetchUsersSuccess,
} from "../redux/users/usersActions";
import { useDispatch, useSelector, connect } from "react-redux";
import { bindActionCreators } from "redux";

const data = [
  {
    name: "Second 1",
    cpu: 4000,
    memory: 2400,
    bandwidth: 2400,
  },
  {
    name: "Second 2",
    cpu: 3000,
    memory: 1398,
    bandwidth: 2210,
  },
  {
    name: "Second 3",
    cpu: 2000,
    memory: 9800,
    bandwidth: 2290,
  },
  {
    name: "Second 4",
    cpu: 2780,
    memory: 3908,
    bandwidth: 2000,
  },
  {
    name: "Second 5",
    cpu: 1890,
    memory: 4800,
    bandwidth: 2181,
  },
  {
    name: "Second 6",
    cpu: 2390,
    memory: 3800,
    bandwidth: 2500,
  },
  {
    name: "Second 7",
    cpu: 3490,
    memory: 4300,
    bandwidth: 2100,
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { users, pending, error } = useSelector((state) => state.users);

  const handleUsers = useCallback(async () => {
    try {
      dispatch(fetchUsersPending());
      const users = await api.users.get();
      dispatch(fetchUsersSuccess(users.data));
    } catch (error) {
      return dispatch(fetchUsersError(error));
    }
  }, [dispatch]);

  useEffect(() => {
    handleUsers();
  }, [handleUsers]);

  useEffect(() => {
    return setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.lastname.toLowerCase().includes(search.toLowerCase()) ||
          user.address.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, users]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) return setSearch("");
    return false;
  };

  const userData = getUserDataToken();

  return (
    <section>
      <Container>
        <Row>
          <Col className='d-flex my-5 flex-column align-items-center'>
            <p>Graphics in non-real time CPU, memory and bandwidth</p>
            <ResponsiveContainer width={280} height={280}>
              <LineChart width={250} height={250} data={data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='memory'
                  stroke='#8884d8'
                  activeDot={{ r: 8 }}
                />
                <Line type='monotone' dataKey='cpu' stroke='#82ca9d' />
                <Line type='monotone' dataKey='bandwidth' stroke='#124a9d' />
              </LineChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={12} className='my-2'>
            <h3>Welcome {userData.name}</h3>
          </Col>
          <Col>
            <FormGroup>
              <InputGroup className='input-group-alternative'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <IoIosSearch />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder='Filter users by name, lastname or address'
                  type='text'
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  name='search'
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col lg={3}>
            <Button block color='success' to='/register' tag={Link}>
              <IoIosAdd />
              <IoIosPerson /> Add a new user
            </Button>
          </Col>
          <Col lg={12} className='mx-aut my-2'>
            {error && <p>Error please reload the page</p>}
            {!error && pending ? (
              <p>Loading users...</p>
            ) : (
              <TableUsers
                users={filteredUsers || users}
                handleUsers={handleUsers}
              />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  error: fetchUsersError(state),
  users: fetchUsersSuccess(state),
  pending: fetchUsersPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUsers: api.users.get(),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
