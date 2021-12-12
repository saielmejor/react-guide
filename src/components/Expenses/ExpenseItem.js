
import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'; 
import Card from'../UI/Card'; 
    function ExpenseItem(props) { // using props means that the data will be forwarded to another component for a custom class
   //a function is also consider a class
   // obtaining the data from Apps using the

   
    return <Card className="expense-item">  
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2> {props.title} </h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        
    </Card> 
} 

export default ExpenseItem;