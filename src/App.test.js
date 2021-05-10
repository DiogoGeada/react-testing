import { mount } from "enzyme";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from "./App";
import { initialState } from './redux/store';
import listReducer from "./redux/reducer";

test("Add and Remove item from list", () => {

    let store = createStore(listReducer, initialState);
    let app = mount(<Provider store={store}><App /></Provider>);
    
    let input = app.find("#item-text");
    input.getDOMNode().value = "Do laundry";
    app.find(".addItem button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("Do laundry");
    
    ul.childAt(0).find("button").simulate("click");
    // this will change app state, that will re-render components. Old elements are deleted and new ones inserted
    // a reference to the new ul is required

    ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("The list is empty");

    app.unmount();
    store = undefined;

});