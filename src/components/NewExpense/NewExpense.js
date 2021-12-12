
import React, {useState } from 'react';
import './NewExpense.css'; 

import ExpenseForm from './ExpenseForm';


const NewExpense =(props) => { 
   const [isEditing,setIsEditing]=useState(false)
    const saveExpenseDataHandler= (enteredExpenseData) => { 
        const expenseData= { 
            ...enteredExpenseData, 
            id:Math.random().toString()
        }; 
       props.onAddExpense(expenseData) // pass expenseData to App.js
    }
    const startEditingHandler=()=> { 
        setIsEditing(true)
    }
    const stopEditingHandler=()=>{ 
        setIsEditing(false)
    }
    // conditional statement to render buttons and expense form 
    return <div className='new-expense'>
        { !isEditing && <button onClick={startEditingHandler}> Add New expense</button>}  
        {/* if isEditing is false then it will use onClick handler to make it true  */}
      { isEditing && < ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> }

    </div>
}
export default NewExpense  