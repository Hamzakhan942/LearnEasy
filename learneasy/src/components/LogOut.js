import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

const ModalExample = (props) => {
  const {
    className, modal, toggle
  } = props;

  const logout = (e) =>{
    axios.post('/student/logout')
  .then(response => {
      if(!response.data.error){
          console.log('Succesful Login out');
          console.log(response);
          window.location.replace('/')
      } else {
          console.log('Log out error: '+response.data.error);
      }
  })
  .catch(err => console.log(err))
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