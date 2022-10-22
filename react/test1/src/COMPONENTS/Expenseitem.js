import React,{UseState} from 'react';
import'./ExpenseItem.css';
function Expense(){
    const MyName = "Hello-this-is-my-name";
    return(
        <div className="expense">
            <h2>Let,s get started</h2>
            <h2>{MyName}</h2>
        </div>

    );
}

export default Expense;
