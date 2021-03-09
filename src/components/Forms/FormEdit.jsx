import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';
import { validateEmail, getInputDate } from '../../utils/formHelpers';
import { toast } from 'react-toastify';
import * as axios from '../../utils/axios';

import OurInput from '../Inputs/OurInput';

class FormEdit extends Component {
  state = {
    id: '',
    name: '',
    address: '',
    lastname: '',
    dni: '',
    age: '',
    email: '',
    password: '',
    errors: {
      name: '',
      lastname: '',
      address: '',
      dni: '',
      age: '',
      email: '',
      password: '',
    },
  };

  componentDidMount() {
    return this.getUser();
  }

  getUser = async () => {
    const { idUser } = this.props.match.params;
    const res = await axios.axiosGet(`/users/${idUser}`);
    const { success, message, body } = res.data;
    if (success) {
      return this.handleUser(body);
    }
    return toast.error(message);
  };

  handleUser = (user) => {
    const { _id, name, lastname, dni, age, email, password, address } = user;
    return this.setState({
      id: _id,
      name,
      lastname,
      address,
      dni,
      age: getInputDate(age),
      email,
      password,
    });
  };

  handleChangeInputForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    return this.setState({ [name]: value });
  };

  handleValidateInputForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = this.state;
    if (name === 'email') {
      const validEmail = validateEmail(value);
      if (validEmail)
        return this.setState({
          errors: {
            email: '',
          },
        });
      errors[name] = `enter a valid email`;
    } else {
      errors[name] =
        value.length < 6 && value.length !== 0
          ? `${name} must be longer than 6 characters`
          : '';
    }
    return this.setState({ errors, [name]: value });
  };

  handleEdit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const {
      name,
      lastname,
      dni,
      age,
      email,
      password,
      id,
      address,
    } = this.state;
    const res = await axios.axiosPut(`/users/${id}`, {
      address,
      name,
      lastname,
      dni,
      age,
      email,
      password,
    });
    const { success, body, message } = res.data;
    if (success) return this.validEdit(body);
    return this.invalidEdit(message);
  };

  validEdit = (user) => {
    const { history } = this.props;
    return history.push(`/dashboard`);
  };

  invalidEdit = (message) => {
    this.setState({ loading: false });
    return toast.error(message);
  };

  render() {
    const {
      errors: { name, lastname, dni, age, email, address },
    } = this.state;
    return (
      <Container>
        <Row className='pt-5'>
          <Col lg={6} sm={12} className='mx-auto'>
            <Card>
              <CardHeader>
                Edit user: {`${this.state.name} ${this.state.lastname}`}
              </CardHeader>
              <CardBody>
                <Form className='form' onSubmit={this.handleEdit}>
                  <OurInput
                    value={this.state.name}
                    label='Name'
                    type='name'
                    name='name'
                    error={name}
                    placeholder='Enter your name'
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    value={this.state.lastname}
                    label='Lastname'
                    type='lastname'
                    name='lastname'
                    error={lastname}
                    placeholder='Enter your lastname'
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    value={this.state.address}
                    label='Address'
                    type='address'
                    name='address'
                    error={address}
                    placeholder='Enter your address'
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    value={this.state.dni}
                    label='DNI'
                    type='number'
                    name='dni'
                    error={dni}
                    placeholder='Enter your dni'
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    value={this.state.age}
                    label='Birthday'
                    type='date'
                    name='age'
                    error={age}
                    placeholder='Enter your birthday'
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    value={this.state.email}
                    label='Email'
                    type='email'
                    name='email'
                    error={email}
                    placeholder='myemail@email.com'
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <Row>
                    <Col className='text-center'>
                      <Button
                        block
                        color='danger'
                        to='/dashboard'
                        tag={Link}
                        className='UncontrolledAlert-link'
                      >
                        Cancel
                      </Button>
                    </Col>
                    <Col className='text-center'>
                      <Button block color='primary' type='submit'>
                        Update
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(FormEdit);
