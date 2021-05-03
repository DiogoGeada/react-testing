import React, { Component } from 'react';
import ItemComponent from '../item/itemComponent';
import addItemComponent from '../newItem/addItemComponent';
import './listComponent.css';

export default class ListComponent extends Component{

    render(){
        return (
            <div className="list">
                 <ul>
                     {(this.props.items.length === 0) ? (
                        <p>The list is empty</p>
                     ) : (
                         this.props.items.map((item, index) => <ItemComponent item={item} key={index} index={index}></ItemComponent>)
                     ) }

                </ul>
            </div>
        );
    }
}