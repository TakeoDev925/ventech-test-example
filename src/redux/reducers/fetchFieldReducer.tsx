import { ActionTypes } from "../constants/action-types";

const initialState = {
  status: false,
  getFieldList: [],
  getFormData: []
};

export const fetchFieldReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ActionTypes.FETCH_FIELD:
      return { ...state, getFieldList: action.payload };

    case ActionTypes.FETCH_STATUS:
      return { ...state, status: action.payload };

    case ActionTypes.SEND_FORM_DATA:
      return { ...state, getFormData: action.payload };

    default:
      return state;
  }
};
