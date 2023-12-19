import React from 'react';



import Expenses from './components/Expenses/Expenses.js';

function App() {
    let expenseDate= new Date(2021,3,28);
    let expenseTitle ="School Fee";
    let expenseAmount=300; 

    let expenses =[
        {
            id:'e1',
            title:'school fee',
            amount:250,
            date: new Date(2021,4,28)
        },
        {
            id:'e2',
            title:'books ',
            amount:50,
            date: new Date(2021,3,28)
        },
        {
            id:'e3',
            title:' fair',
            amount:30,
            date: new Date(2021,6,18)
        },
        {
            id:'e4',
            title:'GYM fee',
            amount:180,
            date: new Date(2021,7,21)
        },
    ];


    return(
     <div>

            <h2>hiii hello</h2>

            <Expenses item={expenses} />

       
        </div>
    );
    
}

export default App;