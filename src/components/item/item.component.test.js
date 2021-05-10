import React from "react";
import ItemComponent from "./itemComponent";
import Item from "../../models/item";
import {MdDelete} from "react-icons/md";
import { mount } from "enzyme";
import store from "../../redux/store";
import { Provider } from 'react-redux';

let itemWrapper;

test("item component initializes", () => {

    // using shallow instead of mount in this instance, would stop enzyme from rendering itemComponent
    itemWrapper = mount(
        <Provider store={store}>
            <ItemComponent item={new Item("White clothes Laundry")} key={0} index={0}/>
        </Provider>);
    
    let li = itemWrapper.find("li");

    expect(li.childAt(0).text()).toBe("White clothes Laundry");
    expect(li.childAt(1).type()).toBe("button");

    let button = li.childAt(1);

    expect(button.props().className).toBe("delete");

    itemWrapper.unmount();
});
