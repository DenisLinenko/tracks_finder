import axios from 'axios';

export function allTracks() {
  return (dispatch) => {
    axios.get(`/all_tracks`)
      .then((response) => {
        dispatch({
          type: 'LIST_TRACKS_SUCCESS',
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'LIST_TRACKS_FAILED',
          payload: error.message,
        });
      });
  };
}
export function oneTrack(id) {
  return (dispatch) => {
    axios.post('/track', { id }, {
      headers: {
          'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        dispatch({
          type: 'GET_TRACK_SUCCESS',
          payload: response.data.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'GET_TRACK_FAILED',
          payload: error.message,
        });
      });
  };
}
