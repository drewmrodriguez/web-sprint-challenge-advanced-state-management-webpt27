import * as actions from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_SMURFS:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actions.SMURFS_LOADED:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: "",
      };
    case actions.ADD_SMURF:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case actions.ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary