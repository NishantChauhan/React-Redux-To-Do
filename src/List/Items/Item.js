import React, {Component} from "react";
import {connect} from "react-redux";
import {updateItem} from "../../redux/actions";

class Item extends Component {
    state = {editable: false};

    onBlurEvent = (event) => {
        //    this.props.onItemUpdate(event, this.props.item);
        this.props.updateItem(this.props.item, event.target.value);
        this.setState({editable: false});
    };
    onEditButtonClick = () => {
        this.setState({editable: true});
    };

    render() {
        if (!this.state.editable) {
            return (
                <div className='form-inline'>
                    <li className="list-group-item"> {this.props.item.itemText}</li>
                    <button onClick={this.onEditButtonClick}>Edit</button>
                </div>
            );
        } else {
            return (
                <input className="list-group-item" type='text'
                       onBlur={(event) => this.onBlurEvent(event, this.props.item)}
                       defaultValue={this.props.item.itemText}
                />
            );
        }
    }
}

const mapDispatchToProps = {updateItem};

export default connect(null, mapDispatchToProps)(Item);