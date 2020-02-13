export default (state = { isError: false, errorMsg: null }, action) => {
  switch (action.type) {
    case 'LIST_TRACKS_SUCCESS':
      return {
        ...state,
        isError: false,
        errorMsg: null,
        results: action.payload,
      }
    case 'LIST_TRACKS_FAILED':
      return {
        ...state,
      results: [],
      isError: true,
      errorMsg: action.payload,
      }
    case 'GET_TRACK_SUCCESS':
      return {
        ...state,
        isError: false,
        errorMsg: null,
        results: action.payload,
      }
    case 'GET_TRACK_FAILED':
      return {
        ...state,
        results: [],
        isError: true,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}
