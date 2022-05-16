import React, {useState} from 'react';
import Teacher from '../http/teacher.js'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent
} from 'mdb-react-ui-kit';

export default function RegForm() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const handleSubmit = event => {
        event.preventDefault();
        const response = Teacher.registration(name, surname, email, password)
      };
  return (
    <form onSubmit={handleSubmit}>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label={`Ім'я`} value={name}
                    onChange={e => setName(e.target.value)}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Прізвище' value={surname}
                    onChange={e => setSurname(e.target.value)}/>
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Пошта' value={email}
                    onChange={e => setEmail(e.target.value)}/>
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Пароль' value={password}
                    onChange={e => setPassword(e.target.value)}/>
      <MDBBtn type='submit' className='mb-4' block onClick={toggleShow}>
        Зареєструватись
      </MDBBtn>
       <MDBModal tabIndex='-1' show={basicModal} setShow={setBasicModal}>
       <MDBModalDialog>
       <MDBModalContent>
           Реєстрація пройшла успішно, можете перейти до авторизації!
           </MDBModalContent>
           </MDBModalDialog>
           </MDBModal>
    </form>
  );
}
