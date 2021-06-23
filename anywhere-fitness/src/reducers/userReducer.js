import {
    GET_CLASSES_LOADING,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_FAILURE,
    ADD_CLASS_LOADING,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILURE,
    DELETE_CLASS_LOADING,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAILURE,
    EDIT_CLASS_LOADING,
    EDIT_CLASS_SUCCESS,
    EDIT_CLASS_FAILURE,
    GET_CLASS_BY_ID_LOADING,
    GET_CLASS_BY_ID_SUCCESS,
    GET_CLASS_BY_ID_FAILURE,
  } from '../actions/userAction';

  const initialState = {
    error: '',
    isLoading: false,
    allClasses: [
        {
        class_id:"",}
    ],
    
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CLASSES_LOADING:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case GET_CLASSES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
          allClasses: action.payload,
        };
      case GET_CLASSES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case ADD_CLASS_LOADING:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case ADD_CLASS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
          allClasses: [...state.allClasses, action.payload],
        };
      case ADD_CLASS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case DELETE_CLASS_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case DELETE_CLASS_SUCCESS:
        return {
          ...state,
          isLoading: false,
        //   allclasses: state.allClasses.filter((class) => {
        //     return class.class_id !== action.payload.class_id;
        //   }),
        };
      case DELETE_CLASS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case EDIT_CLASS_LOADING:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case EDIT_CLASS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
        };
      case EDIT_CLASS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case GET_CLASS_BY_ID_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case GET_CLASS_BY_ID_SUCCESS:
        return {
          ...state,
          singleClass: action.payload,
          isLoading: false,
        };
      case GET_CLASS_BY_ID_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
  };