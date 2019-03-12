/*
Напишите React-приложение, которое выводит на страницу маркированный список (тег <ul>).
Этот список должен содержать три элемента (<li>) с любым текстом.
*/

import React, { Component } from 'react';
import './MarkedList.css';

/*
class MarkedList extends Component {
  render() {
    return (
        <div className="MarkedList">
            <ul className="MarkedList-list">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
        </div>
    );
  }
}
*/

const MarkedList = () => (
    <div className="MarkedList">
        <ul className="MarkedList-list">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    </div>
);

export default MarkedList;
