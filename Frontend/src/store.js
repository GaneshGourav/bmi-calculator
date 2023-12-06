import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as signUpReducer } from "../src/redux/Authentication/reducer";
const rootReducer = combineReducers({
  signUpReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
