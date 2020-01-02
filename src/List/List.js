import React from 'react';
import Item from './Items/Item';
import Auxiliary from '../Auxiliary/Auxiliary'

const list = (props) => {
    return (
        <Auxiliary>
            <div className='card-header'>{props.list.listName}</div>
            <ul className='list-group list-group-flush'>
                {props.list.items.map((item) => <Item key={item.listId + '' + item.itemId} item={item}/>)}
            </ul>
            <button onClick={() => props.itemAddHandler(props.list)}>Add Item at the end of list</button>
        </Auxiliary>
    )
};

export default list;