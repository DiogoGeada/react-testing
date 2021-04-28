export const ACTIONS = {
    ADD_ITEM: 0,
    REMOVE_ITEM: 1
};

const actions = {
    addItem: (text) => ({type: ACTIONS.ADD_ITEM, text: text}),
    removeItem: (index) => ({type: ACTIONS.REMOVE_ITEM, index: index})
};

export default actions;