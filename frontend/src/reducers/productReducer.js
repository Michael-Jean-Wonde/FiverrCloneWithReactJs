import {
  GIG_LIST_REQUEST,
  GIG_LIST_SUCCESS,
  GIG_LIST_FAIL,
} from "../constants/productConstant.js";
import {
  USER_GIG_LIST_REQUEST,
  USER_GIG_LIST_SUCCESS,
  USER_GIG_LIST_FAIL,
} from "../constants/productConstant.js";
import {
  CREATE_GIG_LIST_REQUEST,
  CREATE_GIG_LIST_SUCCESS,
  CREATE_GIG_LIST_FAIL,
} from "../constants/productConstant.js";
import {
  INSERT_GIG_LIST_REQUEST,
  INSERT_GIG_LIST_SUCCESS,
  INSERT_GIG_LIST_FAIL,
} from "../constants/productConstant.js";

export const gigListReducer = (state = { gig: [] }, action) => {
  switch (action.type) {
    case GIG_LIST_REQUEST:
      return { loading: true, gig: [] };
    case GIG_LIST_SUCCESS:
      return { loading: false, gig: action.payload };
    case GIG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const userGigListReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_GIG_LIST_REQUEST:
        return { loading: true, gig: [] };
      case USER_GIG_LIST_SUCCESS:
        return { loading: false, gig: action.payload };
      case USER_GIG_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const createGigListReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_GIG_LIST_REQUEST:
        return { loading: true, gig: [] };
      case CREATE_GIG_LIST_SUCCESS:
        return { loading: false, gig: action.payload };
      case CREATE_GIG_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  
  export const insertGigListReducer = (state = {}, action) => {
    switch (action.type) {
      case INSERT_GIG_LIST_REQUEST:
        return { loading: true, gig: [] };
      case INSERT_GIG_LIST_SUCCESS:
        return { loading: false, insertgigdata: action.payload };
      case INSERT_GIG_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };  