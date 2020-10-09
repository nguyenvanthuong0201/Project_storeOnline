import { combineReducers } from "redux";
import reLocale from "./reLocale";
import reDarkMode from "./reDarkMode";
const appReducers = combineReducers({
  reLocale,
  reDarkMode,
});
export default appReducers;
