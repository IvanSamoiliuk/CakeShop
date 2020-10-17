const initialState = {
    cakes: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CAKES_LOADED":
            return {
                cakes: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
