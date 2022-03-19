import { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';
const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (finalData) => {
        const newExpense = {
            id: `e${Math.floor(Math.random() * 100) + 1}`,
            ...finalData,
        };
        props.onSaveNewExpenses(newExpense);
    };

    const startEditingHAndler = () => {
        setIsEditing(true);
    };

    const cancelEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHAndler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpensesForm
                    onSubmitData={saveExpenseDataHandler}
                    onCancel={cancelEditingHandler}
                ></ExpensesForm>
            )}
        </div>
    );
};

export default NewExpenses;
