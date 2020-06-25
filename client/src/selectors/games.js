const gamesSelector = state => state.games;
export const gamesLoaded = state => gamesSelector(state).gamesLoaded;
export const userGames = state => gamesSelector(state).userGames;
