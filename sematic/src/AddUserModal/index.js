import { connect } from 'react-redux';
import AddUserModal from './AddUserModal';
import { getUsers } from '../UsersTable/index'

const mapStateToProps = (state) => {
    return {
        visible: state.addUserModal.visible,
    };
};


const mapDispatchToProps = (dispatch) => ({
    handleModal: () => {
        dispatch({
            type: 'HANDLE_MODAL'
        });
    },
    addNewUser: async (params) => {
        dispatch({
            type: 'LOADING',
            payload: true,
        });
        try {
            const res = await fetch(`http://localhost:3003/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            dispatch({
                type: 'HANDLE_MODAL',
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
    getUsers: getUsers(dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddUserModal);
