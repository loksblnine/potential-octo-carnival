"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose = require("mongoose");
console.log(123, process.env.MONGO_URI);
const connection = process.env.MONGO_URI;
const connectDb = () => {
    return mongoose.connect(connection);
};
exports.connectDb = connectDb;
//# sourceMappingURL=config.js.map