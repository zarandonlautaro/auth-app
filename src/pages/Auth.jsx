import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loginWithToken } from '../utils/authHelpers';

class Auth extends Component {

  componentDidMount() {
    const { token } = this.props.match.params;
    loginWithToken(token);
    const { history } = this.props;
    history.push('/dashboard');
  }

  render() {
    return (
      <section>
        Logging...
      </section>
    );
  }
}

export default withRouter(Auth);
