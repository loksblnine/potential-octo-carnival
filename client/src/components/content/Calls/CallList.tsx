import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {deleteCall, setCalls, setReadyCalls, sortCalls} from "../../../store/actions/callActions";
import {Spinner} from "react-bootstrap";

import AddCall from "./AddCall";
import EditCall from "./EditCall";
import {ARROWS_SVG} from "../../../utils/svg";

const CallList = () => {
  const dispatch = useAppDispatch();
  const calls = useAppSelector((state) => state.calls.filteredItems);
  const callsPage = useAppSelector((state) => state.calls.page);
  const loadNext = useAppSelector((state) => state.calls.loadNext);
  const areCallsReady = useAppSelector((state) => state.calls.isReady);

  const initSortParams = {
    _id: '',
  };
  const [sortParams, setSortParams] = useState(initSortParams);


  useEffect(() => {
    if (calls.length <= 0) {
      dispatch(setCalls(callsPage, ""));
    }
  }, []);

  const handleNextPosts = useCallback(() => {
    dispatch(setReadyCalls(false));
    dispatch(setCalls(callsPage, ""));
  }, [callsPage]);

  const handleSort = (e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>, paramName: string) => {
    e.preventDefault();
    switch (paramName) {
      case "id": {
        setSortParams(prevState => ({
          _id: prevState._id === "ASC" ? "DESC" : "ASC"
        }));
        dispatch(sortCalls(["_id", sortParams._id]));
        break;
      }
      default: {
        break;
      }
    }
  };

  if (!areCallsReady) {
    return (
      <div className="container">
        <Spinner animation="grow"/>
      </div>
    );
  }
  return (
    <div className="container">
      {calls.length !== 0 ? (
        <table className="table mt-5 text-justify">
          <thead>
          <tr>
            <th scope="col"
                onClick={(e) => handleSort(e, "id")}># {sortParams._id === "ASC" ? ARROWS_SVG.ASC : ARROWS_SVG.DESC}</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Status</th>
            <th scope="col">Support Agent Id</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
          </thead>
          <tbody>
          {calls?.map((item: any) => (
            <tr key={item._id}>
              <th scope="row"> {item._id}</th>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.status}</td>
              <td>{item.supportAgentId}</td>
              <td><EditCall call={item}/></td>
              <td>
                <button className="btn btn-danger"
                        onClick={() => dispatch(deleteCall(item._id))}>Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>) : (
        <div>
          The calls list is empty.
        </div>
      )}
      {
        loadNext &&
        <div className="col text-center">
          <button className="btn btn-primary" onClick={() => handleNextPosts()} disabled={!areCallsReady}> More...
          </button>
        </div>
      }
      <AddCall/>
    </div>
  );
};

export default CallList;