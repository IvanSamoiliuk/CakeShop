const cakesLoaded = (newCakes) => ({
    type: "FETCH_CAKES_SUCCESS",
    payload: newCakes,
});
const cakesRequested = () => ({ type: "FETCH_CAKES_REQUEST" });
const cakesError = (error) => ({ type: "FETCH_CAKES_FEILURE", payload: error });
const addToCart = (id) => ({ type: "ADD_TO_CART", payload: id });
const onIncrease = (id) => ({ type: "ON_INCREASE", payload: id });
const onDecrease = (id) => ({ type: "ON_DECREASE", payload: id });
const onDelete = (id) => ({ type: "ON_DELETE", payload: id });
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

export { fetchCakes, addToCart, onDecrease, onIncrease, onDelete };
