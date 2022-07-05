"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: '.env' });
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.json({ limit: '7mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(express_1.default.static("static"));
app.use("/", index_1.default);
const connection = String(process.env.MONGO_URI);
app.listen(process.env.PORT, function () {
    console.log(`backend at ${new Date} [app.ts]: server listening on port: ${process.env.PORT} and ${process.env.NODE_ENV}`);
    (0, mongoose_1.connect)(connection).then(() => {
        console.log("MongoDb connected");
    });
});
exports.default = app;
//# sourceMappingURL=index.js.map