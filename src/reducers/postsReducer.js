const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    // case 'FETCH_USER':
    //   return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
