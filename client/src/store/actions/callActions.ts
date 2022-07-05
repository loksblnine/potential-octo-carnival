import {ACTIONS} from "../../utils/constants";
import {apiDelete, apiGet, apiPost, apiPut} from "../../http/httpPlaceholder";
import {toast} from "react-toastify";

type Call = {
  id?: number,
  startDate: string,
  endDate: string,
  status: string,
  supportAgentID: string,
}

export const setCalls = (page: number, queryString: string) => {
  return async (dispatch: any) => {
    try {
      const {data}: any = await apiGet({
        url: `/calls/offset/${page}?${queryString}`
      });
      dispatch({
        type: ACTIONS.CALLS.SET_CALLS,
        payload: data
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
};

export const setReadyCalls = (isReady: boolean) => ({
  type: ACTIONS.CALLS.SET_READY_CALLS,
  payload: isReady
});

export const updateCall = (call: Call, id: number) => {
  return async (dispatch: any) => {
    try {
      const {data} = await apiPut({
        data: call,
        url: `/calls/${id}`
      });
      dispatch({
        type: ACTIONS.CALLS.UPDATE_CALL,
        payload: data
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
};

export const addCall = (call: Call) => {
  return async (dispatch: any) => {
    try {
      const {data} = await apiPost({
        data: call,
        url: "/calls"
      });
      dispatch({
        type: ACTIONS.CALLS.ADD_CALL,
        payload: data
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
};

export const deleteCall = (id: number) => {
  return async (dispatch: any) => {
    try {
      await apiDelete({
        url: `/calls/${id}`
      });
      dispatch({
        type: ACTIONS.CALLS.DELETE_CALL,
        payload: id
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
};

export const sortCalls = (param: string[]) => {
  return (dispatch: any) => {
    dispatch({
      type: ACTIONS.CALLS.SORT,
      payload: param
    });
  };
};
