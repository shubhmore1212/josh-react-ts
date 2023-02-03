import { ACTIONS } from "../../../constant";

interface StateType {
  searchInput: string;
  searchTrigger: string;
  statusControl: string;
  sortControl: string;
  sortKey: string;
  pageNumber: number;
}

interface Action {
  type: string;
  payload?: any;
}

export const initialState: StateType = {
  searchInput: "",
  searchTrigger: "",
  statusControl: "",
  sortControl: "",
  sortKey: "",
  pageNumber: 1,
};

export const displayTodoReducer = (
  state: StateType = initialState,
  action: Action
) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    case ACTIONS.SET_SEARCH_TRIGGER:
      return { ...state, searchTrigger: action.payload };
    case ACTIONS.SET_STATUS_CONTROL:
      return { ...state, statusControl: action.payload };
    case ACTIONS.SET_SORT_CONTROL:
      return { ...state, sortControl: action.payload };
    case ACTIONS.SET_SORT_KEY:
      return { ...state, sortKey: action.payload };
    case ACTIONS.SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};
