export const addListImpl = (state) => {

    let newState = {...state};
    newState.listGroup = {...state.listGroup};
    let listCounter = state.listGroup.listCounter + 1;
    newState.listGroup.lists = state.listGroup.lists.concat({
        listId: listCounter,
        listName: 'List ' + (listCounter),
        itemCounter: 0,
        items: []
    });
    newState.listGroup.listCounter = listCounter;
    return newState;
};
export const updateItemImpl = (state, item, text) => {
    console.log('[actionImpl.js] - UPDATE_ITEM - ', item, text);
    if (item.itemText === text) {
        return state;
    }
    let newState = {};
    newState.listGroup = {...state.listGroup};
    newState.listGroup.lists = state.listGroup.lists.slice();
    let newList = undefined;
    newState.listGroup.lists = state.listGroup.lists.map((list) => {
            let listItem = findEditedItem(list, item);
            if (listItem) {
                newList = {...list};
                return updatedList(list, listItem, text);
            }
            return list;
        }
    );
    let message = 'You updated Item "' + item.itemText + '" in the list ' + newList.listName + ' to "' + text + '"';
    mapUpdatesForNewState(newState, state, message);
    newState.listGroup.updateId = newState.updates.count;
    newState.listGroup.previousListGroup = {...state.listGroup};
    newState.listGroup.nextLists = undefined;
    return newState;
};

function findEditedItem(list, item) {
    return list.items.find((listItem) => listItem.itemId === item.itemId && listItem.listId === item.listId);
}

function updatedList(list, listItem, text) {
    let newList = {...list};
    newList.items = list.items.map(
        (item) => {
            if (item === listItem) {
                let newItem = {...listItem};
                newItem.itemText = text;
                return newItem;
            }
            return item;
        }
    );
    return newList;
}

export function undoActionImpl(state) {
    let newState = {...state};
    newState.listGroup = {...state.listGroup.previousListGroup};
    newState.listGroup.nextListGroup = {...state.listGroup};
    return newState;
}

export function redoActionImpl(state) {
    let newState = {...state};
    newState.listGroup = {...state.listGroup.nextListGroup};
    return newState;
}

function mapUpdatesForNewState(newState, state, message) {

    newState.updates = {...state.updates};
    newState.updates.count = state.updates.count + 1;

    newState.updates.updateList = state.updates.updateList.concat({
        updateId: state.updates.count + 1,
        update: message,
        current: true
    });
}

export const addItemImpl = (state, selectedList) => {
    let newState = {};
    newState.listGroup = {...state.listGroup};
    newState.listGroup.lists = state.listGroup.lists.map((currentList) => {
        if (currentList.listId === selectedList.listId) {
            let newList = {...selectedList};
            newList.items = selectedList.items.concat({
                itemId: selectedList.itemCounter + 1,
                listId: selectedList.listId,
                itemText: ''
            });
            newList.itemCounter = selectedList.itemCounter + 1;
            return newList;
        }
        return currentList;
    });
    let message = 'New Item was added at the end of ' + selectedList.listName;
    mapUpdatesForNewState(newState, state, message);
    newState.listGroup.updateId = newState.updates.count;
    newState.listGroup.previousListGroup = {...state.listGroup};
    newState.listGroup.nextLists = undefined;
    return newState;
};