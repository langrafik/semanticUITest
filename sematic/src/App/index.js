import { connect } from 'react-redux';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  handleAuth: () => {
    dispatch({
      type: 'AUTH'
    });
  },
});

export default connect(
  (state) => ({
    isLoading: state.notifications.loading,
    authed: state.app.authed
  }), mapDispatchToProps
)(App);
