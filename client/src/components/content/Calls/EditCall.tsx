import React, {FormEvent, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {updateCall} from "../../../store/actions/callActions";

const EditCall = (call: any) => {
  const dispatch = useDispatch();
  const [endDate, setEndDate] = useState(call.endDate);
  const [startDate, setStartDate] = useState(call.startDate);
  const [status, setStatus] = useState(call.status);
  const [supportAgentId, setSupportAgentId] = useState(call.supportAgentId);
  const inputRef = React.useRef(null);

  const edit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {endDate, startDate, status, supportAgentId};
    // @ts-ignore
    dispatch(updateCall(body));
    // @ts-ignore
    inputRef.current.click();
  }, [supportAgentId, endDate, startDate, status]);

  return (
    <div>
      <button type="button" className="btn btn-warning" data-toggle="modal"
              data-target={`#edit`}>
        Edit
      </button>

      {/*
      2 datepicker
      2 buttons to status
      select to agent id choose
      */}
      <div className="modal fade" id="edit" tabIndex={-1} role="dialog"
           aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(event) => edit(event)}>
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalLabel">Edit call information</h2>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label>Start date</label>
                <input className="form-control" value={startDate}
                       onChange={e => setStartDate(e.target.value)} required
                />
                <label>End date</label>
                <input className="form-control" value={endDate}
                       onChange={e => setEndDate(e.target.value)} required
                />
                <label>Status</label>
                <input className="form-control" value={status}
                       onChange={e => setStatus(e.target.value)} required
                />
                <label>Support Agent Id</label>
                <input className="form-control" value={supportAgentId}
                       onChange={e => setSupportAgentId(e.target.value)} required
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                        ref={inputRef}>Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCall;