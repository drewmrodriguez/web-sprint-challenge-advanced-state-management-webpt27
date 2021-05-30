import { combineReducers } from "redux";
import { smurfsReducer } from "./smurfsReducer";

export const initialState = {};

export const rootReducer = combineReducers({ smurfsReducer });