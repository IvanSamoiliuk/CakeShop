const initialState = {
    cakes: [],
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CAKES_LOADED":
            return {
                cakes: action.payload,
                loading: false,
                error: null,
            };
        case "CAKES_REQUESTED":
            return {
                cakes: [],
                loading: true,
                error: null,
            };
        case "CAKES_ERROR":
            return {
                cakes: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
