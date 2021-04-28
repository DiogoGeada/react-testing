import React from "react";
import ItemComponent from "../../components/item/itemComponent";
import Item from "../../models/item";
import {MdDelete} from "react-icons/md";
import { shallow } from "enzyme";

let itemWrapper;

test("item component initializes", () => {

    itemWrapper = shallow(<ItemComponent item={new Item("White clothes Laundry")}/>);
    
    let li = itemWrapper.find("li");

    expect(li.childAt(0).text()).toBe("White clothes Laundry");
    expect(li.childAt(1).type()).toBe("button");

    let button = li.childAt(1);

    expect(button.props().className).toBe("delete");
    expect(button.contains(<MdDelete class="icon"/>)).toBe(true);

    itemWrapper.unmount();
});
