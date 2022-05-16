import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import ScheduleAPI from '../../http/schedule.js';

import GroupsAPI from '../../http/groups.js';


export default function TableGroup() {

    const [schedule, setSchedule] = useState([]);
    useEffect(async ()=>{
        const responseSchedule = await ScheduleAPI.getSchedules();
        setSchedule(responseSchedule);
    },[]);


    return (
        <MDBTable>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Групи</th>
                    <th scope='col'>Видалити</th>

                </tr>
            </MDBTableHead>
            <MDBTableBody>
            {schedule.map(scheduleElement=>(<tr>
                    <td>{scheduleElement.nameGroups[0].nameGroups}</td>
                    <MDBBtn className='btn-close' color='none'></MDBBtn>

                </tr>))}
            </MDBTableBody>
        </MDBTable>
    );
}
