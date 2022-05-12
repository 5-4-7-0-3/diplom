import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

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
                        <MDBNavbarNav right className='mb-2 mb-lg-0'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem active>
                                <MDBBtn className='mx-2' color='success'>
                                    login
                                </MDBBtn>
                            </MDBNavbarItem>

                            <MDBNavbarItem active>
                                <MDBBtn className='mx-2' color='light'>
                                    register
                                </MDBBtn>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>

            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Heading</h1>


            </div>
        </header>
    );
}
