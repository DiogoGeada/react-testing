import { mount } from "enzyme";
import Item from "../../models/item";
import { initialState } from "../../redux/store";
import { createStore } from "redux";
import listReducer from "../../redux/reducer";
import { Provider } from 'react-redux';
import App from "../../App";

/*test("ADD item to list", () => {

});*/

test("Remove item from list", () => {

    // Mocking safe user input
    initialState.list.push(new Item("Do laundry"));
    initialState.list.push(new Item("Go Shopping"));

    const store = createStore(listReducer, initialState);

    let app = mount(<Provider store={store}><App /></Provider>);
    
    app.find("ul").childAt(0).find("button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("Go Shopping");

});