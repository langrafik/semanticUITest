const initialState = {
    visible: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_MODAL':
            return {
                visible: !state.visible,
            };
        default:
            return state;
    }
};

