const initialState = {
    cakes: [],
    cartItems: [],
    sumTotal: 0,
    loading: true,
    error: null,
};

const updateCartItems = (cartItems, item, inx) => {
    if (item.amount === 0)
        if (inx === -1) {
            return [...cartItems, item];
        }
    return [...cartItems.slice(0, inx), item, ...cartItems.slice(inx + 1)];
};

const updateCartItem = (cake, item) => {
    let newItem;

    if (item) {
        newItem = {
            ...item,
            amount: item.amount + 1,
            total: item.total + cake.price,
        };
    } else {
        newItem = {
            id: cake.id,
            name: cake.name,
            imgURL: cake.imgURL,
            amount: 1,
            total: cake.price,
        };
    }
    return newItem;
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CAKES_SUCCESS":
            return {
                ...state,
                cakes: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_CAKES_REQUEST":
            return {
                ...state,
                cakes: [],
                loading: true,
                error: null,
            };
        case "FETCH_CAKES_FEILURE":
            return {
                ...state,
                cakes: [],
                loading: false,
                error: action.payload,
            };
        case "ON_INCREASE": {
            const id = action.payload;
            const cake = state.cakes.find((cake) => cake.id === id);
            const cartIndex = state.cartItems.findIndex(
                (cake) => cake.id === id
            );
            const item = state.cartItems[cartIndex];
            const newItem = updateCartItem(cake, item);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, cartIndex),
            };
        }

        case "ON_DECREASE": {
            const id = action.payload;
            const cake = state.cakes.find((cake) => cake.id === id);
            const cartIndex = state.cartItems.findIndex(
                (cake) => cake.id === id
            );
            const item = state.cartItems[cartIndex];

            let newItem = {
                ...item,
                amount: item.amount - 1,
                total: item.total - cake.price,
            };
            if (newItem.amount === 0) {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, cartIndex),
                        ...state.cartItems.slice(cartIndex + 1),
                    ],
                };
            }
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, cartIndex),
                    newItem,
                    ...state.cartItems.slice(cartIndex + 1),
                ],
            };
        }

        case "ON_DELETE": {
            const id = action.payload;
            const newCartItems = state.cartItems.filter(
                (item) => item.id !== id
            );
            return {
                ...state,
                cartItems: newCartItems,
            };
        }

        default:
            return state;
    }
};

export default reducer;
