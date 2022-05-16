import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import DisciplineAPI from '../../http/discipline';
import TeacherOrientAPI from '../../http/teacherOrientation.js';


export default function TableTeacher() {

    const [disciplines, setDiscipline] = useState([]);
    useEffect(async ()=>{
        const responseDisciplines = await TeacherOrientAPI.getTeacherOrientation();
        setDiscipline(responseDisciplines);

    },[]);


    return (
        <MDBTable>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Дисципліни</th>
                    <th scope='col'>Видалити</th>

                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {
                disciplines.map(disciplineElement=>(
                <tr>
                    <th>{disciplineElement.nameDisciplines[0].nameDisciplines}</th>
                    <td className='d-flex justify-content-center'>
                        <MDBBtn className='btn-close' color='none'></MDBBtn>
                    </td>
                </tr>))
                }
            </MDBTableBody>
        </MDBTable>
    );
}
