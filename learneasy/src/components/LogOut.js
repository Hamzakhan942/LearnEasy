import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    className, modal, toggle
  } = props;

  const logout = (e) =>{
    console.log('You are logged out')
  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Learn Easy</ModalHeader>
        <ModalBody>
          Do you want to log out?
        </ModalBody>
        <ModalFooter>
          <Button color={"danger"} onClick={logout}>Yes</Button>{' '}
          <Button color={"secondary"} onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;