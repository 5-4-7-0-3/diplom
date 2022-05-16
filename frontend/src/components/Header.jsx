import React, { useState } from 'react';
import ModalAuth from './modals/ModalAuth'
import ModalReg from './modals/ModalReg'
import ModalTeacher from './modals/ModalTeacher'
import ModalDiscipline from './modals/ModalDiscipline';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
} from 'mdb-react-ui-kit';
import ModalGroup from './modals/ModalGroup';




export default function Header() {

    return (
        <header>

            <MDBNavbar expand='lg' light bgColor='white' fixed>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>
                    <div className='collapse navbar-collapse' id='navbarExample01'>
                        <MDBNavbarNav left className='mb-2 mb-lg-0'>

                            <MDBNavbarItem active className='pl-1'>
                                <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem active className='d-flex m-1'>
                                <ModalTeacher />
                            </MDBNavbarItem>
                            <MDBNavbarItem active className='d-flex m-1'>
                                <ModalDiscipline />
                            </MDBNavbarItem>
                            <MDBNavbarItem active className='d-flex m-1'>
                                <ModalGroup />
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                            <MDBNavbarItem active className='d-flex mr-1 flex-row-reverse'>
                                <ModalReg />
                            </MDBNavbarItem>

                            <MDBNavbarItem active className='d-flex ml-1 flex-row-reverse'>
                                <ModalAuth />
                            </MDBNavbarItem>



                    </div>
                </MDBContainer>
            </MDBNavbar>

            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>РОЗКЛАД <p>ДЛЯ ФАКУЛЬТЕТУ ІНОЗЕМНОЇ ФІЛОЛОГІЇ</p></h1>


            </div>
        </header>
    );
}
