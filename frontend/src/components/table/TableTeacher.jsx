import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import TeacherOrientAPI from '../../http/teacherOrientation.js';

export default function TableTeacher() {

    const [teacher, setTeacher] = useState([]);
    useEffect(async ()=>{
        const responseTeacher = await TeacherOrientAPI.getTeacherOrientation();
        console.log(responseTeacher);
        setTeacher(responseTeacher);

    },[]);


    return (
        <MDBTable>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Предмет</th>
                    <th scope='col'>{`Ім'я`}</th>
                    <th scope='col'>Прізвище</th>
                    <th scope='col'>Видалити</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {teacher.map(teacherElement=>(
                <tr>
                    <th>{teacherElement.nameDisciplines[0].nameDisciplines}</th>
                    <td>{teacherElement.nameTeacher[0].name}</td>
                    <td>{teacherElement.nameTeacher[0].surname}</td>
                    <td className='d-flex justify-content-center'>
                        <MDBBtn className='btn-close' color='none'></MDBBtn>
                    </td>
                </tr>))}
            </MDBTableBody>
        </MDBTable>
    );
}
