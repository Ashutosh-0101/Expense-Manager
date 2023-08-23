import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpenseChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  



  return (
    <div>
      <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
      </li>
    </div>

  );
};

export default Expenses;