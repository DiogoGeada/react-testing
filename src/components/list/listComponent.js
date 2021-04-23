import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './listComponent.css';

export default class ListComponent extends Component{

    render(){
        return (
            <div className="list">
                 <ul>
                    <p>The list is empty</p>
                </ul>
            </div>
        );
    }
}