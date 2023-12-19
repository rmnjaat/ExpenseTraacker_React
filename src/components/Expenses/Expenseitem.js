import React , {useState}from 'react';


import './Expenseitem.css';

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

//props , for eg 

//those value passed in app.ja to expenseitem are now property of (props)
function Expenseitem(props){

    const [ title, setTitle ]=    useState(props.title);

    const clickhandler = ()=>{
        setTitle("New Title")
    }
    


    return (
    
        <Card  className="expense-item">
        
        <ExpenseDate date={props.date}/>

        <div className="expense-item__description">
            <h2>{title}</h2>
            <h2 className="expense-item__price">{props.amount} $</h2>
        </div>

        <button onClick={clickhandler} >Change  Tittle</button>

    </Card>
    )
}

export default Expenseitem;