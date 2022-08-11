import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscire = store.subscribe(()=>{
    console.log("store changed", store.getState())
})

store.dispatch(bugAdded("new#Bug1"));
store.dispatch(bugAdded("new#Bug2"));
store.dispatch(bugAdded("new#Bug3"));
store.dispatch(bugAdded("new#Bug4"));
store.dispatch(bugRemoved(1));
// unsubscire();
store.dispatch(bugResolved(3));

console.log(store.getState());