import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../utils/mediaQueriesStyling';
import buttonMainStyle from '../../utils/buttonStyling';

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  z-index: 1;
  ${media.tablet`
    padding: 2rem;
  `}
  ${media.phone`
    padding: 1rem;
  `}
`

const $Modal = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 900px;
  ${media.phone`
    padding: 0.5rem;
  `}
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  line-height: initial;
  display: block;
  margin: 0;
  color: #676D70;
`

const CloseButton = styled.button`
  ${buttonMainStyle}
  font-size: 1.5rem;
  margin-left: 1rem;
  background-color: #5AAC44;
  color: #FFF;
  &:hover, &:active {
    background-color: #519839;
  }
`

class Modal extends Component {
  render() {
    const { show, toggleModal, title } = this.props;
    if(!show) {
      return null;
    }

    return (
      <BackDrop>
        <$Modal>
          <Header>
            <Title>{title}</Title>
            <CloseButton
              onClick={toggleModal}
            >
              x
            </CloseButton>
          </Header>
          {this.props.children}
        </$Modal>
      </BackDrop>
    );
  }
}

export default Modal;