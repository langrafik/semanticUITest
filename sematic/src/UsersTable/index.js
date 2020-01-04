import { connect } from 'react-redux';
import UsersTable from './UsersTable';

const mapStateToProps = (state) => {
  const {
    users: {
      users = [],
    },
  } = state;

  return {
    users,
  };
};


const mapDispatchToProps = (dispatch) => ({
  getUsers: async () => {
    dispatch({
      type: 'LOADING',
      payload: true,
    });
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users').then((result) => result.json());
      dispatch({
        type: 'GET_USERS_SUCCESS',
        payload: result,
      });
    } catch (e) {
      dispatch({
        type: 'GET_USERS_ERROR',
      });
    } finally {
      dispatch({
        type: 'LOADING',
        payload: false,
      });
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersTable);
