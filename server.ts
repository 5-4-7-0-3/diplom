import { setupDb } from "./db/db-setup";
const PORT = process.env.PORT || 3000;
import express from "express";

require("express-async-errors");
const app = require("express")();
const server = require("http").createServer(app);

// import routerUser from "./routes/user";
setupDb();

app.use(express.json());

app.use("/", (req: any, res: { json: (arg0: { message: string; }) => any; }) => {
    return res.json({ message: "HALO" });
});

// app.use("/user", routerUser);

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