import { mount } from "enzyme";
import Item from "../../models/item";
import { initialState } from "../../redux/store";
import { createStore } from "redux";
import listReducer from "../../redux/reducer";
import { Provider } from 'react-redux';
import App from "../../App";
import Queue from "../../dataStructures/queue";

let state, app, store;

beforeEach(() => {
    state = {
        list: [],
        errors: new Queue()
    }
});

afterEach(() => {
    app.unmount();
    store = undefined;
    state = undefined;
});

test("Add item to list", () => {

    // Mocking safe user input
    store = createStore(listReducer, state);
    app = mount(<Provider store={store}><App /></Provider>);
    
    let input = app.find("#item-text");
    input.getDOMNode().value = "Do Laundry";
    app.find(".addItem button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("Do Laundry");

});

test("Add empty item to list", () => {

    // Mocking safe user input
    store = createStore(listReducer, state);
    app = mount(<Provider store={store}><App /></Provider>);
    
    let input = app.find("#item-text");
    input.getDOMNode().value = "          ";
    app.find(".addItem button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("The list is empty");

});

test("Remove item from list", () => {

    // Mocking safe user input
    state.list.push(new Item("Do laundry"));
    state.list.push(new Item("Go Shopping"));

    store = createStore(listReducer, state);
    app = mount(<Provider store={store}><App /></Provider>);
    
    app.find("ul").childAt(0).find("button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("Go Shopping");

});

test("Add and Remove item from list", () => {

    store = createStore(listReducer, state);
    app = mount(<Provider store={store}><App /></Provider>);
    
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

});