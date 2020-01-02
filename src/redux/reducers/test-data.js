export const sampleState = {
    listGroup: {
        lists: [{
            listId: 1,
            listName: 'List 1',
            listCounter: 2,
            items: [{itemId: 1, listId: 1, itemText: 'Item 1-1'}, {itemId: 2, listId: 1, itemText: 'Item 1-2'}]
        },
            {listId: 2, listName: 'List 2', itemCounter: 1, items: [{itemId: 1, listId: 2, itemText: 'Item 2-1'}]},
            {listId: 3, listName: 'List 3', itemCounter: 1, items: [{itemId: 1, listId: 3, itemText: 'Item 3-1'}]}
        ],
        previousListGroup: undefined,
        nextListGroup: undefined,
        listCounter: 0,
        updateId: 0
    },
    updates: {
        count: 0, updateList: [{
            updateId: 0,
            update: 'Initial State before updates',
            current: true
        }]
    },
};

export const emptyState = {
    listGroup: {
        lists: [],
        previousListGroup: undefined,
        nextListGroup: undefined,
        listCounter: 0,
        updateId: 0
    },
    updates: {
        count: 0, updateList: [{
            updateId: 0,
            update: 'Initial State before updates',
            current: true
        }]
    },
};
