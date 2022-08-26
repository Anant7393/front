// //For incrementing the quiz question counter
// export const IncQuestionNum = () => {
//   return {
//     type: 'INC_QUESTION_NUM',
//   };
// };

// //For decrementing the quiz question counter
// export const DecQuestionNum = () => {
//   return {
//     type: 'DEC_QUESTION_NUM',
//   };
// };

// //For storing additional details of user
// export const AddDetails = (data) => {
//   return {
//     type: 'ADD_DETAILS',
//     payload: data,
//   };
// };

// //For basic user details
// export const UserDetails = (data) => {
//   return {
//     type: 'USER_DETAILS',
//     payload: data,
//   };
// };

// export const LogoutUser = () => {
//   return {
//     type: 'LOGOUT',
//   };
// };
//For storing additional details of user
export const AddDetails = (data) => {
    return {
      type: 'ADD_DETAILS',
      payload: data,
    };
  };
  
  //For basic user details
  export const UserDetails = (data) => {
    return {
      type: 'USER_DETAILS',
      payload: data,
    };
  };
  
  export const FarmerDetails = (data) => {
    return {
      type: 'FARMER_DETAILS',
      payload: data,
    };
  };
  
  
  export const AllUsers = (data) => {
      return {
        type: 'ALL_USERS',
        payload: data,
      };
    };
  
  export const LogoutUser = () => {
    return {
      type: 'LOGOUT',
    };
  };