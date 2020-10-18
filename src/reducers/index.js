const initialState = {
    cakes: [],
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CAKES_SUCCESS":
            return {
                cakes: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_CAKES_REQUEST":
            return {
                cakes: [],
                loading: true,
                error: null,
            };
        case "FETCH_CAKES_FEILURE":
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
