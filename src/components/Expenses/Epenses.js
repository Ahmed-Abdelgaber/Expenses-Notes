import ExpensesItems from './ExpensesItems';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    let expensesContent = (
        <p className="expenses-filter__message">There are no Expenses</p>
    );

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((el) => (
            <ExpensesItems
                key={el.id}
                title={el.title}
                amount={el.amount}
                date={el.date}
            ></ExpensesItems>
        ));
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
