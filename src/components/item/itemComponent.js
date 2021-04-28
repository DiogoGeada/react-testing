import React, { Component } from "react";
import {MdDelete} from "react-icons/md";
import actions from "../../redux/actions";
import "./itemComponent.css";
import {connect} from 'react-redux';

class ItemComponent extends Component{

    render(){
       return (
        <li>
            {this.props.item.text}
            <button className="delete" onClick={() => { this.props.removeItem(this.props.index)}}><MdDelete className="icon"/></button>
        </li>);
    }
}


let mapDispatchToProps = dispatch => {
    return {
        removeItem: (index) => { dispatch(actions.removeItem(index)); }
    };
}

export default connect(null, mapDispatchToProps)(ItemComponent);