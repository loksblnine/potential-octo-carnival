import {model, Schema} from 'mongoose';

export interface ICall {
  id?: number;
  startDate: string;
  endDate: string;
  status: string;
  supportAgentId: number;
}

const callSchema = new Schema<ICall>({
  id: {type: Schema.Types.ObjectId, required: false},
  startDate: {type: String, required: true},
  endDate: {type: String, required: true},
  status: {type: String, required: true},
  supportAgentId: {type: Number, required: true},
});

const call = model<ICall>('Calls', callSchema);

export default call;
