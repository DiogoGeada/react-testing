import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import App from "../../App";
import Item from "../../models/item";
import listReducer from "../../redux/reducer";
import { initialState } from "../../redux/store";

test("Remove from list", () => {

    let store = createStore(listReducer, initialState);
    
    // Mocking safe user input
    initialState.list.push(new Item("Do laundry"));
    initialState.list.push(new Item("Go Shopping"));

    let app = mount(<Provider store={store}><App /></Provider>);
    
    app.find("ul").childAt(0).find("button").simulate("click");
    
    let ul = app.find("ul");
    expect(ul.children().length).toBe(1);
    expect(ul.childAt(0).text()).toBe("Go Shopping");

    app.unmount();

});
