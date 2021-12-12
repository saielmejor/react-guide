import React , { useState}  from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState (' ');
    const [enteredAmount, setEnteredAmount]= useState (' '); 
    const [enteredDate, setEnteredDate]= useState (' '); // initialize all state with string because state only reads strings 
    

    const titleChangeHandler= (event) => { 
       setEnteredTitle(event.target.value);  // you use this to get the value entered in title form
// setEnteredTitle will store the target value 
//gets value of the title 
    };
const amountChangeHandler= (event) => { 
    setEnteredAmount(event.target.value);
}
const dateChangeHandler= (event) => { 
    setEnteredDate(event.target.value);
}

const submitHandler= (event) => { 
    event.preventDefault(); // prevent the default of the request so the page does not updat e
    const expenseData= { 
        title: enteredTitle,
        amount:+enteredAmount, // add a plus sign so it gets a number instead of a string
        
        date:new Date(enteredDate) 
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(''), 
    setEnteredDate(''), 
    setEnteredAmount('')


}
    return <form onSubmit={submitHandler}>  
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle}onChange={titleChangeHandler}/>

                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>

                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>

                </div>
            
        </div>
        <div className='new-expense__actions'> 
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type=" submit">Add Expense 
            </button>
             </div> 
         
    </form>
 } ; 

export default ExpenseForm 