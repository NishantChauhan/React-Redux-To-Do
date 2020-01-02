import {ADD_ITEM_TO_LIST, ADD_LIST, REDO_ACTION, UNDO_ACTION, UPDATE_ITEM} from "./actionTypes";

export const updateItem = (item, text) => (
    {
        type: UPDATE_ITEM,
        payload: {
            item: item,
            text: text
        }
    }
);

export const addItemToList = (list) => (
    {
        type: ADD_ITEM_TO_LIST,
        payload: {
            list: list
        }
    }
);
export const addList = () => ({type: ADD_LIST});
export const undoAction = () => ({type: UNDO_ACTION});
export const redoAction = () => ({type: REDO_ACTION});
