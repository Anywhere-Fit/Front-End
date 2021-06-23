import axiosWithAuth from '../utils/axiosWithAuth';

//Instructor

export const GET_CLASSES_LOADING = 'GET_CLASSES_LOADING';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_CLASSES_FAILURE = 'GET_CLASSES_FAILURE';

export const GET_CLASS_BY_ID_LOADING = 'GET_CLASS_BY_ID_LOADING';
export const GET_CLASS_BY_ID_SUCCESS = 'GET_CLASS_BY_ID_SUCCESS';
export const GET_CLASS_BY_ID_FAILURE = 'GET_CLASS_BY_ID_FAILURE';

export const ADD_CLASS_LOADING = 'ADD_CLASS_LOADING';
export const ADD_CLASS_SUCCESS = 'ADD_CLASS_SUCCESS';
export const ADD_CLASS_FAILURE = 'ADD_CLASS_FAILURE';

export const DELETE_CLASS_LOADING = 'DELETE_CLASS_LOADING';
export const DELETE_CLASS_SUCCESS = 'DELETE CLASS_SUCCESS';
export const DELETE_CLASS_FAILURE = 'DELETE_CLASS_FAILURE';

//Edit/Update
export const EDIT_CLASS_LOADING = 'EDIT_CLASS_LOADING';
export const EDIT_CLASS_SUCCESS = 'EDIT_CLASS_SUCCESS';
export const EDIT_CLASS_FAILURE = 'EDIT_CLASS_FAILURE';

//User
export const RESERVE_CLASS_LOADING = 'RESERVE_CLASS_LOADING';
export const RESERVE_CLASS_SUCCESS = 'RESERVE_CLASS_SUCCESS';
export const RESERVE_CLASS_FAILURE = 'RESERVE_CLASS_FAILURE';

export const RESCHEDULE_CLASS_LOADING = 'RESCHEDULE_CLASS_LOADING';
export const RESCHEDULE_CLASS_SUCCESS = 'RESCHEDULE_CLASS_SUCCESS';
export const RESCHEDULE_CLASS_FAILURE = 'RESCHEDULE_CLASS_FAILURE';

export const CANCEL_CLASS_LOADING = 'CANCEL_CLASS_LOADING';
export const CANCEL_CLASS_SUCCESS = 'CANCEL_CLASS_SUCCESS';
export const CANCEL_CLASS_FAILURE = 'CANCEL_CLASS_FAILURE';

//get class list
export const getClasses = () => (dispatch) => {
    dispatch({ type: ADD_CLASS_LOADING  });
    axiosWithAuth()
      .get('api/classes')
      .then((res) => dispatch({ type: ADD_CLASS_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch({
          type: GET_CLASSES_FAILURE,
          payload: err.response.data.message,
        });
      });
  };

  export const addClass = (newClass) => (dispatch) => {
    dispatch({ type: ADD_CLASS_LOADING });
    console.log(newClass);
    axiosWithAuth()
      .post('api/classes', newClass)
      .then((res) => dispatch({ type: ADD_CLASS_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch({
          type: GET_CLASSES_FAILURE,
          payload: err.response,
        });
      });
  };
  export const deleteClass = (class_id) => (dispatch) => {
    dispatch({ type:  DELETE_CLASS_LOADING });
    axiosWithAuth()
      .delete(`api/classes/${class_id}`)
      .then((res) => dispatch({ type: DELETE_CLASS_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch({
          type: DELETE_CLASS_FAILURE,
          payload: err.response,
        });
      });
  };
  export const editClass = (class_id, editedClass) => (dispatch) => {
    console.log(class_id);
    dispatch({ type: EDIT_CLASS_LOADING });
    axiosWithAuth()
      .put(`api/classes/${class_id}`, editedClass)
      .then((res) => dispatch({ type: EDIT_CLASS_SUCCESS, payload: res.data }))
      .catch((err) => {
        dispatch({
          type: EDIT_CLASS_FAILURE,
          payload: err.response,
        });
      });
  };
  