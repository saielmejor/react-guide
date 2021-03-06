import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return < h2 className='expenses-list__fallback'>Found no expenses </h2>
    }

    return (
        <li>
        <ul className='expenses-list'>
            {props.items.map((expense, index) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}

        </ul>
        </li>
    )
}

export default ExpenseList;
