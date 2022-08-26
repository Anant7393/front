const initialState = {
    farmerDetails: [],
  };
  
  const FarmerDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'FARMER_DETAILS':
        const data = action.payload;
        return {
          ...state,
          farmerDetails: data,
        };
      case 'LOGOUT':
        return {
          ...state,
          farmerDetails: [],
        };
  
      default:
        return state;
    }
  };
  
  export default FarmerDetails;