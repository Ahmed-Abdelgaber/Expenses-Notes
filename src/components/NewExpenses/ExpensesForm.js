import { useState } from 'react';
import './ExpensesForm.css';
const ExpensesForm = (props) => {
    // const [enterdTitle, setEnteredTitle] = useState('');
    // const [enterdAmount, setEnteredAmount] = useState('');
    // const [enterdDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enterdTitle: '',
        enterdAmount: '',
        enterdDate: '',
    });

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        // setEnteredTitle(event.target.value);

        setUserInput({
            ...userInput,
            enterdTitle: event.target.value,
        });

        setUserInput((prevState) => {
            return { ...prevState, enterdTitle: event.target.value };
        });
    };
    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        // setEnteredAmount(event.target.value);

        setUserInput((preState) => {
            return { ...preState, enterdAmount: Number(event.target.value) };
        });
    };

    const dateChangeHandler = (event) => {
        // console.log(event.target.value);
        // setEnteredDate(event.target.value);

        setUserInput((preState) => {
            return { ...preState, enterdDate: event.target.value };
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        let finalData = {
            title: userInput.enterdTitle,
            amount: userInput.enterdAmount,
            date: new Date(userInput.enterdDate),
        };
        setUserInput({
            enterdTitle: '',
            enterdAmount: '',
            enterdDate: '',
        });
        props.onSubmitData(finalData);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        placeholder="Title"
                        required
                        type="text"
                        value={userInput.enterdTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        placeholder="Amount in USD"
                        required
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enterdAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        placeholder="Date"
                        required
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={userInput.enterdDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    CANCEL
                </button>
                <button type="submit">ADD</button>
            </div>
        </form>
    );
};

export default ExpensesForm;
