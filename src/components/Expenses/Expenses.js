import React, { useState } from 'react';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const onChangeFilterHandler = selectedYear => {
    setFilteredYear(selectedYear)
  };
  const filterExpensesByYear = props.items.filter(expense => {  // filters the expense base on the date
    return expense.date.getFullYear().toString() === filteredYear // if this is true then it will only show the selected year
    //gets the full year from expense.date and covnerts it to string then check sif the year is the same as the filtered year
  });
  //  add logic for expenses and value JSX code in a variable 

  return (

    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler} />
        {/* creates a map to map expenses in ExpenseItem  */}
        <ExpensesChart expenses={filterExpensesByYear}/>
        <ExpenseList items={filterExpensesByYear} />
      </Card>
    </div>

  );
}
export default Expenses
