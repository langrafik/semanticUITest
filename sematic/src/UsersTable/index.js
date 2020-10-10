/* eslint-disable no-shadow */
import { connect } from 'react-redux';
import UsersTable from './UsersTable';

export const getUsers = (dispatch) => async () => {
  dispatch({
    type: 'LOADING',
    payload: true,
  });
  try {
    // eslint-disable-next-line no-undef
    const result = await fetch('http://localhost:3003/users').then((result) => result.json());
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
}

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
  getUsers: getUsers(dispatch),
  deleteUsers: async (ids = []) => {
    dispatch({
      type: 'LOADING',
      payload: true,
    });
    try {
      const asyncRes = await Promise.all(ids.map(async (id) => {
        await fetch(`http://localhost:3003/users/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }));

      return true;
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
  handleModal: () => {
    dispatch({
      type: 'HANDLE_MODAL',
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersTable);
