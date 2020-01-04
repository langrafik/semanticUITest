import { connect } from 'react-redux';
import App from './App';

export default connect(
  (state) => ({
    isLoading: state.notifications.loading,
  }),
)(App);
