import axios from 'axios';

// actions
export const RECEIVE_GAMES_STARTED = 'RECEIVE_GAMES_STARTED';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const GAMES_ERROR = 'GAMES_ERROR';

// reducer
const initialState = {
  userGames: [],
  gamesLoaded: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'RECEIVE_GAMES_STARTED':
      return {
        ...state
      }

    case 'RECEIVE_GAMES':
      return {
        ...state,
        gamesLoaded: true,
        userGames: action.data
      }
    default:
      return state
  };
};

// action creators
export const receiveGamesStarted = () => {
  return { type: RECEIVE_GAMES_STARTED }
}

export const receiveGames = (data) => {
  return { type: RECEIVE_GAMES, data }
}

export const gamesError = (error) => {
  return { type: GAMES_ERROR, error }
}

//services
export function fetchGames() {
  return dispatch => {
    dispatch(receiveGamesStarted());
    return axios.get('/api/v1/games').then(res => {
      return dispatch(receiveGames(res.data));
    })
    .catch(error => {
      return dispatch(gamesError(error));
    });
  };
};
