import { ActionTypes } from "../constants/action-types";
import { APIKit } from "../../utils/api-kit";

export const isLoading = (payload: boolean) => {
  return (
    {
      type: ActionTypes.FETCH_STATUS,
      payload: payload,
    }
  )
};

export const fetchFields = (callBack) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
    dispatch(isLoading(true));
    const response = await APIKit.get('');
    callBack(response.data.data);
    dispatch({
      type: ActionTypes.FETCH_FIELD,
      payload: response.data.data,
    });
    dispatch(isLoading(false));
  } catch (error: any) {
    console.log("error", error);
    dispatch(isLoading(false));
  }
};

export const uploadFormData = (formData: any, callBack) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
    dispatch(isLoading(true));
    const response = await APIKit.post('', formData);
    callBack(response.data);
    dispatch({
      type: ActionTypes.SEND_FORM_DATA,
      payload: response.data,
    });
    dispatch(isLoading(false));
  } catch (error: any) {
    console.log("error", error);
    dispatch(isLoading(false));
  }
};

