import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Epenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import { useState } from 'react';

const intExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setNewExpense] = useState(intExpenses);
    const addExpense = (newExpense) => {
        setNewExpense((prev) => {
            return [newExpense, ...prev];
        });
    };
    return (
        <div>
            <NewExpenses onSaveNewExpenses={addExpense} />
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
