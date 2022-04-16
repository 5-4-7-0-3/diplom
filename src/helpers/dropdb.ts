import mongoose from "mongoose";

function dropDatabase() {
    main().catch((err) => console.log(err));

    async function main() {
        mongoose.connection.db.dropDatabase();
    }
}

export {dropDatabase};
