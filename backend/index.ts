import { setupDb } from "./src/db/db-setup";
import express from "express";

import routerCouple from "./src/routers/couple";
import routerDiscipline from "./src/routers/discipline";
import routerGroups from "./src/routers/groups";
import routerSchedule from "./src/routers/schedule";
import routerTeacher from "./src/routers/teacher";
import routerTeacherOrientation from "./src/routers/teacherOrientation";
import routerWorkingHours from "./src/routers/workingHours";

import {dropDatabase} from "./src/helpers/dropdb"
import { seedTableCouple, seedTableDiscipline, seedTableGroups, seedTableSchedule, seedTableTeacher, seedTableTeacherOrientation, seedTableWorkingHours } from "./src/helpers/seedTable";


require("express-async-errors");
const PORT = process.env.PORT || 3000;
const app = require("express")();
const server = require("http").createServer(app);


setupDb();

app.use(express.json());
app.use("/couple", routerCouple);
app.use("/discipline", routerDiscipline);
app.use("/groups", routerGroups);
app.use("/schedule", routerSchedule);
app.use("/teacher", routerTeacher);
app.use("/teacherOrientation", routerTeacherOrientation);
app.use("/workingHours", routerWorkingHours);

app.use("/dropDb", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    dropDatabase()
    return res.json({ message: "droped" });
});

app.use("/seed", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableCouple();
    seedTableGroups();
    seedTableDiscipline();
    seedTableTeacher();
    return res.json({ message: "All seeded" });
});

app.use("/seedCouple", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableCouple()
    return res.json({ message: "Couple seeded" });
});

app.use("/seedGroups", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableGroups()
    return res.json({ message: "Groups seeded" });
});

app.use("/seedDiscipline", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableDiscipline()
    return res.json({ message: "Discipline seeded" });
});

app.use("/seedTeacher", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableTeacher()
    return res.json({ message: "Teacher seeded" });
});




app.use("/seedTableWorkingHours", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableWorkingHours()
    return res.json({ message: "WorkingHours seeded" });
});

app.use("/seedTableTeacherOrientation", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableTeacherOrientation()
    return res.json({ message: "Schedule seeded" });
});

app.use("/seedTableSchedule", (req: any, res: { json: (arg0: { message: string; }) => any; })=>{
    seedTableSchedule()
    return res.json({ message: "Schedule seeded" });
});


// app.use("/", (req: any, res: { json: (arg0: { message: string; }) => any; }) => {
//     return res.json({ message: "HALO" });
// });
app.use(errorHandler);


server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

export = app;

function errorHandler(err: any, req: any, res: { headersSent: any; status: (arg0: number) => void; render: (arg0: string, arg1: { error: any; }) => void; }, next: (arg0: any) => any) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render("error", { error: err });
}
