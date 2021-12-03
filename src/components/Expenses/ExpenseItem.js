
import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'; 
import Card from'../UI/Card'; 
    function ExpenseItem(props) { // using props means that the data will be forwarded to another component for a custom class
   //a function is also consider a class
   // obtaining the data from Apps using the
   const [title, setTitle]= useState(props.title);  
   // this is array destructing  and stores title and the new title 
   console.log('ExpenseItem evaluated by React ')

   const clickHandler= () =>{ 
       setTitle('Updated'); //when we call setTitle calls State function and assign a new value and should be re-evaluated
       console.log('Clicked'); 
   }
    return <Card className="expense-item">  
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2> {title} </h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        {/* point at the function clickHander and it is executed when button is clicked */}
    </Card> 
} 

export default ExpenseItem;