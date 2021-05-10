import { mount } from "enzyme";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from "../../App";
import listReducer from "../../redux/reducer";
import { initialState } from "../../redux/store";

let app, store;

beforeEach(() => {
    store = createStore(listReducer, initialState);
    app = mount(<Provider store={store}><App /></Provider>);
});

afterEach(() => {
    app.unmount();
    store = undefined;
});

test("Add To list", () => {
    
    let input = app.find("#item-text");
    input.getDOMNode().value = "Do Laundry";
    app.find(".addItem button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("Do Laundry");

});

test("Ignore invalid", () => {
    
    let input = app.find("#item-text");
    input.getDOMNode().value = "          ";
    app.find(".addItem button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("The list is empty");

});