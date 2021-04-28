import ListComponent from "./components/list/listComponent";
import './App.css';
import { Component } from "react";
import { connect } from "react-redux";
import store from './redux/store';

class App extends Component {

  constructor(props){
    super(props);

    store.subscribe(() => { store.getState(); });
  }

  render(){
    return (
      <div className="App">
        <h1>To Do</h1>
        <ListComponent items={this.props.list}></ListComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    errors: state.errors
  }
}

export default connect(mapStateToProps)(App);
