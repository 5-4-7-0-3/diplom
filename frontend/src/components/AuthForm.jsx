import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import Teacher from '../http/teacher.js'

export default function AuthForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const response = Teacher.auth(email, password)
        console.log(response);
      };

  return (
    <form onSubmit={handleSubmit}>
        <MDBInput className='mb-4' type='email' id='form1Example1' label='Пошта'  onChange={e => setEmail(e.target.value)}/>
        <MDBInput className='mb-4' type='password' id='form1Example2' label='Пароль' onChange={e => setPassword(e.target.value)}/>

        <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
            <MDBCheckbox id='form1Example3' label={`Запам'ятати`} defaultChecked />
            </MDBCol>
            <MDBCol>
            <a href='#!'>Забув пароль?</a>
            </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' block>
            Вхід
        </MDBBtn>
        <div className='text-center'>
        <p>
        Не зареєстрований? <a href='#!'>Реєстрація</a>
        </p>
      </div>
    </form>
  );
}
