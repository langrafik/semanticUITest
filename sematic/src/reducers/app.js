const initialState = {
    authed: false
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'AUTH':
            return {
                authed: !state.authed
            };
        default:
            return state;
    }
};
