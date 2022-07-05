/// <reference types="mongoose" />
export interface ICall {
    id?: number;
    startDate: string;
    endDate: string;
    status: string;
    supportAgentId: number;
}
declare const call: import("mongoose").Model<ICall, {}, {}>;
export default call;
//# sourceMappingURL=Call.d.ts.map