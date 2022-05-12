import { faker } from '@faker-js/faker';
import { Couple } from "../db/models/couple"
import { Discipline } from '../db/models/disciplines';
import { Groups } from '../db/models/groups';
import { Schedule } from '../db/models/schedule';
import { Teachers } from '../db/models/teacher';
import { TeacherOrientation } from '../db/models/teacherOrientation';
import { WorkingHours } from '../db/models/workingHours';

async function seedTableCouple() {

    let time = [
        "09:00 - 10:20",
        "10:40 - 12:00",
        "12:30 - 13:50",
        "14:10 - 15:30",
        "15:40 - 17:00",
        "17:10 - 18:30",
        "18:40 - 20:00"
    ]
    let numCouple = 1;

    for (let i = 0; i < time.length; i++) {
        await new Couple({
            numberCouple : numCouple,
            timeInterval : time[i]
        }).save();
        numCouple++;
    }
}

async function seedTableGroups(){

    let group = [
        "1KT",
        "1PM",
        "2KT",
        "2PM",
    ]

    for (let i = 0; i < group.length; i++) {
        await new Groups({
            nameGroups: group[i]
        }).save();
    }
}

async function seedTableDiscipline() {

    let discipline = [
        "Технічний переклад за професійним спрямуванням",
        "Теорія програмування",
        "Комп’ютерна графіка. Математичні методи",
        "Програмування. Спеціалізовані мови програмування",
        "Технології захисту інформації",
        "Економіка та бізнес",
        "Управління ІТ-проектами",
        "Методи та системи штучного інтелекту",
        "Інтегральне перетворення і операційне числення",
        "Моделювання складних систем та процесів",
        "Прикладна математика. Моделювання фізичних процесів ",
        "Програмування",
        "Програмування. Web-технології та webдизайн"
    ]

    for (let i = 0; i < discipline.length; i++) {
        await new Discipline({
            nameDisciplines : discipline[i]
        }).save();
    }
}

async function seedTableTeacher() {
    for (let i = 0; i < 13; i++) {
        let name: string = faker.name.firstName();
        let surname: string = faker.name.lastName();
        let email: string = faker.internet.email(name, surname);
        let password: string = faker.internet.password(20);
        let healthStatus: string = "healthy";
        let role: string = "user";

        await new Teachers({
            name,
            surname,
            email,
            password,
            healthStatus,
            role
        }).save();
    }
}

async function seedTableWorkingHours() {

    let group = await Groups.find();
    let discipline = await Discipline.find();

        for (let i = 0; i <= 1; i++) {
            let elementGroup = group[i];

                for (let i = 0; i <= 6; i++) {
                    let elementDiscipline = discipline[i];
                    let hours = getRandomArbitrary()
                    let hour = String(hours)

                    new WorkingHours({
                        nameGroups: elementGroup._id,
                        nameDisciplines: elementDiscipline._id,
                        workingHours: hour
                    }).save();

                }
            }

            for (let i = 2; i <= 3; i++) {
                let elementGroup = group[i];

                for (let i = 7; i <= 12; i++) {
                    let elementDiscipline = discipline[i];
                    let hours = getRandomArbitrary()
                    let hour = String(hours)

                    new WorkingHours({
                        nameGroups: elementGroup._id,
                        nameDisciplines: elementDiscipline._id,
                        workingHours: hour
                    }).save();
                }
            }

    function getRandomArbitrary(min: number = 2, max: number = 4) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }
}

async function seedTableTeacherOrientation() {
    let teachers = await Teachers.find();
    let disciplines = await Discipline.find();

    for (let i = 0; i < disciplines.length; i++) {

        let elementTeachers = teachers[i];
        let elementDisciplines = disciplines[i];

        new TeacherOrientation({
            nameTeacher: elementTeachers._id,
            nameDisciplines: elementDisciplines._id
        }).save();
    }

}


async function seedTableSchedule() {

    let groups = await Groups.find();
    let cocouples = await Couple.find();
    let date = new Date(Date.now());

    for (let g = 0; g < 1 /*groups.length*/; g++) {  ////////////////////////////////groups    G
            let workingHours = await WorkingHours.find( {nameGroups: groups[g]._id} );
            let allWorkingHours = 0;

        for (let wh = 0; wh < workingHours.length; wh++) {
            let elementWH = workingHours[wh];
            allWorkingHours = allWorkingHours + elementWH.workingHours
        }

            console.log("allWorkingHour = " + allWorkingHours);    //////////////////////

            let hoursOneDay = Math.floor( allWorkingHours / 5 )
            let hoursOneDayRemainder = allWorkingHours % 5;

            // if (hoursOneDayRemainder > 0) {
            //     hoursOneDay++
            // }
            console.log("hoursOneDay = " + hoursOneDay);
            console.log("hoursOneDayRemainder = " + hoursOneDayRemainder);

        for (let h = 0; h < workingHours.length; h++) {///////////////////// workingHours    H
            const elementworkingHours = workingHours[h];

            if ([1, 2, 3, 4, 5].includes(date.getDay())) {



                    console.log("запись = " + hoursOneDay);
                for (let c = 0; c < hoursOneDay; c++) {////////////////////////////cocouples    C
                    const elementCocouples = cocouples[c];
                    // console.log("==============");
                    // console.log(hoursOneDay);
                    // console.log("==============");

                    if (c===workingHours[h].workingHours) {
                        c = 100;
                    }


                    let teacher = await TeacherOrientation.findOne({ nameDisciplines: workingHours[h].nameDisciplines });



                    // console.log(groups[g]._id);
                    // console.log("================================");
                    // console.log(elementworkingHours.nameDisciplines[0]._id);
                    // console.log("================================");
                    // console.log(elementCocouples._id);
                    // console.log("================================");
                    // console.log(teacher.nameTeacher[0]._id);



                    await new Schedule({
                            date,
                            nameGroups: groups[g]._id,
                            nameDisciplines: elementworkingHours.nameDisciplines[0]._id,
                            timeInterval: elementCocouples._id,
                            teacher: teacher.nameTeacher[0]._id
                        }).save();



                }
            }
            date.setDate(date.getDate() + 1);
        }
    }


    // new Schedule({
    //     date,
    //     nameGroups,
    //     nameDisciplines,
    //     timeInterval,
    //     teacher
    // }).save();

    function getWeekDay(date: any) {
        let days = ['НД', 'ПН', 'ВВ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
                   // 0       1     2     3     4     5     6
        return days[date.getDay()];
        }
}

export {seedTableCouple, seedTableGroups, seedTableDiscipline, seedTableTeacher, seedTableWorkingHours, seedTableTeacherOrientation, seedTableSchedule}
