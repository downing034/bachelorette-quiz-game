import { connect } from 'react-redux';
import DashboardComponent from './dashboard';

// ducks
import { fetchGames } from '../../ducks/games';

// selectors
import { userGames, gamesLoaded } from '../../selectors/games';

export const mapStateToProps = state => ({
  userGames: userGames(state),
  gamesLoaded: gamesLoaded(state)
});

export const mapDispatchToProps = { fetchGames };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
