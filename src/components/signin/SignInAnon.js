import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInAnon } from '../../actions/userActions/signIn';
import styled from 'styled-components';

const $Anon = styled.p`
  color: #7BC86C;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  text-align: center;
`

const Link = styled.span`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #5AAC44;
  }
  &:active {
    color: #5AAC44;
  }
`

class SignInAnon extends Component {
  handleClick = () => {
    this.props.handleSignInClick();
    this.props.signInAnon();
  }

  render() {
    return (
      <$Anon>
        or click&nbsp;
        <Link
          onClick={this.handleClick}
        >
        here
        </Link>
        &nbsp;to sign in anonymously
      </$Anon>
    );
  }
}

export default connect(null, { signInAnon })(SignInAnon);