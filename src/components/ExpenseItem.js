
import React, { Component } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'; 
    function ExpenseItem(props) {
  
   // obtaining the data from Apps using the
    return <div className="expense-item">  
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2> {props.title} </h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    </div>
}

export default ExpenseItem;