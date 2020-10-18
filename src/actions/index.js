const cakesLoaded = (newCakes) => ({
    type: "FETCH_CAKES_SUCCESS",
    payload: newCakes,
});
const cakesRequested = () => ({ type: "FETCH_CAKES_REQUEST" });
const cakesError = (error) => ({ type: "FETCH_CAKES_FEILURE", payload: error });
function fetchCakes(dispatch, cakeShopService) {
    return function () {
        dispatch(cakesRequested());
        cakeShopService
            .getCakes()
            .then((res) => dispatch(cakesLoaded(res)))
            .catch((error) => {
                dispatch(cakesError(error));
            });
    };
}

export { fetchCakes };
