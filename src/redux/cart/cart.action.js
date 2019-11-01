export const toggleCartHidden = () => ({
    type: "TOGGLE_CART_HIDDEN"
});

export const addItems = item => ({
    type: "ADD_ITEM",
    payload: item
});