import { createStore,combineReducers } from "redux";
import Alldata from "./reducres/reducer";

const store = createStore(combineReducers({
    listdata:Alldata
})
)
export default store;