import {ADD_ITEM_TO_LIST, ADD_LIST, REDO_ACTION, UNDO_ACTION, UPDATE_ITEM} from "../actionTypes";
import {emptyState} from "./test-data";
import {addItemImpl, addListImpl, redoActionImpl, undoActionImpl, updateItemImpl} from "./actionImpl";

let initialState = emptyState;

const reducer = (state = initialState, action) => {
    console.log('[reducer.js] - state', state);
    switch (action.type) {
        case ADD_LIST:
            console.log('[reducer.js] - ADD_LIST');
            return addListImpl(state);
        case ADD_ITEM_TO_LIST:
            let {list} = action.payload;
            console.log('[reducer.js] - ADD_ITEM_TO_LIST', list);
            return addItemImpl(state, list);
        case UPDATE_ITEM:
            let {item, text} = action.payload;
            console.log('[reducer.js] - UPDATE_ITEM', item, text);
            return updateItemImpl(state, item, text);
        case UNDO_ACTION:
            console.log('[reducer.js] - UNDO_ACTION');
            return undoActionImpl(state);
        case REDO_ACTION:
            console.log('[reducer.js] - REDO_ACTION');
            return redoActionImpl(state);
        default:
            return state;
    }
};
export default reducer;