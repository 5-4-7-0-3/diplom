import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import TableSchedule from './components/TableSchedule.jsx';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx';

function App() {
    return (

        <MDBContainer fluid >

            <Header />
            <TableSchedule />
            <Footer />

        </MDBContainer>
    );
}

export default App;
