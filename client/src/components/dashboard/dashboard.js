import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../common/loader';

export default class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchGames } = this.props;
    fetchGames();
  }

  render () {
    const { userGames, gamesLoaded } = this.props;
    console.log('user games in dashboard comp', userGames)

    if (!gamesLoaded) { return ( <Loader /> ) }

    return (
      <div>games are show soon</div>
    )
  }
};

Dashboard.displayName = 'Dashboard';

Dashboard.propTypes = {
  gamesLoaded: PropTypes.bool.isRequired,
  fetchGames: PropTypes.func.isRequired,
  userGames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
