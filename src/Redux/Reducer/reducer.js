
const initialState = {
  savedVideosList: [],
  isSaved: {},
  isLiked: {},
  isDisliked: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        savedVideosList: [...state.savedVideosList, action.payload],
        isSaved: { ...state.isSaved, [action.payload.id]: true },
      };
    case 'DELETE_ITEM':
      const updatedSavedVideosList = state.savedVideosList.filter(
        (video) => video.id !== action.payload
      );
      const updatedIsSaved = { ...state.isSaved };
      delete updatedIsSaved[action.payload];
      return {
        ...state,
        savedVideosList: updatedSavedVideosList,
        isSaved: updatedIsSaved,
      };

    case 'LIKE_VIDEO':
      return {
        ...state,
        isLiked: { ...state.isLiked, [action.payload]: true },
      };

    case 'UNLIKE_VIDEO':
      const updatedIsLiked = { ...state.isLiked };
      delete updatedIsLiked[action.payload];
      return {
        ...state,
        isLiked: updatedIsLiked,
      };

    case 'DISLIKE_VIDEO':
      return {
        ...state,
        isDisliked: { ...state.isDisliked, [action.payload]: true },
      };

    case 'UNDISLIKE_VIDEO':
      const updatedIsDisliked = { ...state.isDisliked };
      delete updatedIsDisliked[action.payload];
      return {
        ...state,
        isDisliked: updatedIsDisliked,
      };


    default:
      return state;
  }
};


export default reducer
