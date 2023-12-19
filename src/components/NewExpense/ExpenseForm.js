import React,{useState} from "react";
import './ExpenseForm.css'

function ExpenseForm(){

    const [enteredTitle,setenteredTitle]=useState("");
    const [enteredAmount,setenteredAmount]=useState("");
    const [enteredDate,setenteredDate]=useState("");

    const titleChaneHandler=(event)=>{
        setenteredTitle(event.target.value);      
    };
    
    const amountChaneHandler=(event)=>{

    };
    const dateChaneHandler=(event)=>{

    };

    
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expension__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChaneHandler}/>
                </div>

                <div className="new-expension__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChaneHandler} />
                </div>

                <div className="new-expension__control">
                    <label>Date</label>
                    <input type="date" onChange={amountChaneHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type ="submit"> Add Expense </button>

            </div>
        </form>
    )

}

export default ExpenseForm