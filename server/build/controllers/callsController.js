"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallById = exports.getCalls = exports.createCall = void 0;
const Call_1 = __importDefault(require("../database/models/Call"));
const createCall = async (request, response) => {
    try {
        const { startDate, endDate, status, supportAgentId } = request.body;
        const Call = await Call_1.default.create({
            startDate,
            endDate,
            status,
            supportAgentId
        });
        response.status(201).json(Call);
    }
    catch (e) {
        response.status(500).json("Something went wrong");
    }
};
exports.createCall = createCall;
const getCalls = async (request, response) => {
    try {
        const page = request.params.page;
        const offset = 10 * Number(page);
        const posts = await Call_1.default.find().skip(offset).limit(10);
        response.status(200).json(posts);
    }
    catch (e) {
        response.status(500).json("Something went wrong");
    }
};
exports.getCalls = getCalls;
const getCallById = async (request, response) => {
    try {
        const id = request.params.id;
        const customer = await Call_1.default.findById(id);
        response.status(200).json(customer);
    }
    catch (e) {
        response.status(500).json("Something went wrong");
    }
};
exports.getCallById = getCallById;
//# sourceMappingURL=callsController.js.map