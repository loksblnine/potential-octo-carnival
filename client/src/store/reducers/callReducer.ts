import {ACTIONS} from "../../utils/constants";

type initialState = {
  isReady: boolean,
  items: any[],
  filteredItems: any[],
  page: number,
  loadNext: boolean
}

const initialState: initialState = {
  isReady: false,
  items: [],
  filteredItems: [],
  page: 0,
  loadNext: true,
};

const callReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case ACTIONS.CALLS.SET_CALLS: {
      if (action.payload.length < 10) {
        return {
          ...state,
          items: state.items.concat(action.payload),
          filteredItems: state.items.concat(action.payload),
          isReady: true,
          loadNext: false
        };
      }
      return {
        ...state,
        items: state.items.concat(action.payload),
        filteredItems: state.items.concat(action.payload),
        isReady: true,
        page: state.page + 1
      };
    }
    case ACTIONS.CALLS.UPDATE_CALL: {
      const array = state.items.map((item: any) => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        items: array,
        filteredItems: array,
      };
    }
    case ACTIONS.CALLS.SET_READY_CALLS: {
      return {
        ...state,
        isReady: action.payload
      };
    }
    case ACTIONS.CALLS.ADD_CALL: {
      return {
        ...state,
        items: state.items.concat(action.payload),
        filteredItems: state.items.concat(action.payload),
      };
    }
    case ACTIONS.CALLS.DELETE_CALL: {
      return {
        ...state,
        items: state.items.filter((item: any) => item.id !== action.payload),
        filteredItems: state.items.filter((item: any) => item.id !== action.payload),
      };
    }
    case ACTIONS.CALLS.SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ACTIONS.CALLS.SET_FILTERED_ARRAY: {
      return {
        ...state,
        filteredItems: action.payload,
      };
    }
    case ACTIONS.CALLS.CLEAR_FILTERED : {
      return {
        ...state,
        filteredItems: state.items
      }
    }
    case ACTIONS.CALLS.SORT : {
      return {
        ...state,
        filteredItems: state.filteredItems.sort((i1: any, i2: any) => {
          if (i1[`${action.payload[0]}`] < i2[`${action.payload[0]}`]) {
            return (-1 * (action.payload[1] === "ASC" ? 1 : -1))
          }
          if (i1[`${action.payload[0]}`] > i2[`${action.payload[0]}`]) {
            return (1 * (action.payload[1] === "ASC" ? 1 : -1))
          }
          return 0
        }),
      }
    }
    default:
      return state;
  }
};

export default callReducer;
