"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const callSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId, required: false },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    status: { type: String, required: true },
    supportAgentId: { type: Number, required: true },
});
const call = (0, mongoose_1.model)('Calls', callSchema);
exports.default = call;
//# sourceMappingURL=Call.js.map