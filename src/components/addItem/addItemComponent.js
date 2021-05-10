import { Component } from "react";
import { MdAdd } from "react-icons/md";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import './addItemComponent.css';

class AddItemComponent extends Component{
    
    inputText;

    render(){
        return (
            <div className="addItem">
                <input type="text" id="item-text" placeholder="New item..." ref={(input) => {this.inputText = input; }}/>
                <button onClick={() => { this.AddItem(this); }}><MdAdd className="icon"/> New Item</button>
            </div>
        );
    }

    AddItem(context) {
        context.props.addItem(this.inputText.value);
        context.inputText.value = "";
    }

}

let mapDispatchToProps = dispatch => {
    return {
        addItem: (text) => { dispatch(actions.addItem(text)) }
    }
}

export default connect(null, mapDispatchToProps) (AddItemComponent);