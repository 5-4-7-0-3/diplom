import React, { useState } from 'react';
import RegForm from '../RegForm.jsx'
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit';

export default function ModalReg() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
    <MDBBtn className='mx-2 aligin-self-end' color='light' onClick={toggleShow}>Реєстрація</MDBBtn>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Реєстрація</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
              <RegForm />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn className='mx-2 aligin-self-end' color='danger' onClick={toggleShow}> Закрити</MDBBtn>
          </MDBModalFooter>

        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}
