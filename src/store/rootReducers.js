import { combineReducers } from "@reduxjs/toolkit";
import authreducer from "./slice/auth";
import headerSlice from "../features/common/headerSlice";
import modalSlice from "../features/common/modalSlice";
import rightDrawerSlice from "../features/common/rightDrawerSlice";
import leadsSlice from "../features/leads/leadSlice";
import operations from "./slice/operations";
const appReducers = combineReducers({
  auth: authreducer,
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadsSlice,
  operations: operations,
});

const reducer = (state, action) => appReducers(state, action);

export default reducer;
