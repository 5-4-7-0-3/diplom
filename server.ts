import { setupDb } from "./src/db/db-setup";
import express from "express";
import routerTeachers from "./src/routers/teacher";
import routerDiscipline from "./src/routers/discipline";
import routerSchedule from "./src/routers/schedule";

require("express-async-errors");
const PORT = process.env.PORT || 3000;
const app = require("express")();
const server = require("http").createServer(app);


setupDb();

app.use(express.json());
app.use("/discipline", routerDiscipline);
app.use("/teachers", routerTeachers);
app.use("/schedule", routerSchedule);

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