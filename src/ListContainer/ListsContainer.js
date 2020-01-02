import React, {Component} from "react";
import List from "../List/List";
import {connect} from "react-redux";
import {addItemToList, addList, redoAction, undoAction} from "../redux/actions";


class ListsContainer extends Component {
    render() {
        console.log('[ListsContainer.js]', this.props);
        return (
            <div>
                <div className='card'>
                    <div className='form-inline'>
                        <button onClick={this.props.addList}>Add List</button>
                        <button onClick={this.props.undoAction} disabled={!this.props.listGroup.previousListGroup}>Undo
                        </button>
                        <button onClick={this.props.redoAction} disabled={!this.props.listGroup.nextListGroup}>Redo
                        </button>
                    </div>
                    <div>
                        {this.props.listGroup.lists.map(
                            (itemList) => <List key={itemList.listId} list={itemList}
                                                itemAddHandler={this.props.addItemToList}/>
                        )}
                    </div>
                </div>
                <hr/>
                <div className='card'>
                    <div className='card-header'>Updates</div>
                    <ol className='list-group list-group-flush'>
                        {this.props.updates.updateList.map((update) => <li
                            className={update.updateId === this.props.listGroup.updateId ? 'list-group-item active' : 'list-group-item'}
                            key={update.updateId}>{update.update}</li>)}
                    </ol>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listGroup: state.listGroup,
        updates: state.updates
    };
};

export default connect(mapStateToProps, {addList, addItemToList, undoAction, redoAction})(ListsContainer);