const reducers = (userDetails = [], action) => {
    switch (action.type) {
      
      case "FETCH_ALL_USER":
        return action.payload;
     
      default:
        return userDetails;
    }
  };
  export default reducers;