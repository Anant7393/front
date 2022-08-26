import AdditionalDetails from './AdditionalDetails';
import UserDetails from './UserDetails';
import AllUsers from './AllUsers';
import FarmerDetails from './FarmerDetails';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  AdditionalDetails,
  UserDetails,
  AllUsers,
  FarmerDetails
});

export default rootReducer;