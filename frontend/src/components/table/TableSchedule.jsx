import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ScheduleAPI from '../../http/schedule.js';
import moment from 'moment';

export default function TableSchedule() {

    const [schedule, setSchedule] = useState([]);
    useEffect(async ()=>{
        const responseSchedule = await ScheduleAPI.getSchedules();
        setSchedule(responseSchedule);
    },[]);


    return (
        <MDBTable>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Дата</th>
                    <th scope='col'>Пара</th>
                    <th scope='col'>Початок/Кінець</th>
                    <th scope='col'>Група</th>
                    <th scope='col'>Предмет</th>
                    <th scope='col'>Викладач</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {schedule.map(scheduleElement=>(<tr>
                    <th scope='row'>{moment(scheduleElement.date).format('DD-MM-YYYY dddd')}</th>
                    <td>{scheduleElement.timeInterval[0].numberCouple}</td>
                    <td>{scheduleElement.timeInterval[0].timeInterval}</td>
                    <td>{scheduleElement.nameGroups[0].nameGroups}</td>
                    <td>{scheduleElement.nameDisciplines[0].nameDisciplines}</td>
                    <td>{scheduleElement.teacher[0].name} {scheduleElement.teacher[0].surname}</td>

                </tr>))}
            </MDBTableBody>
        </MDBTable>
    );
}
