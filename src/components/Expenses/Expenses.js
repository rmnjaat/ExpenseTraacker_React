import  './Expenses.css';
import React from 'react';

import Expenseitem from './Expenseitem';
import Card from '../UI/Card';

function Expenses(props) {

    return (
        <Card className='expenses'>
         <Expenseitem 
            //passing data to expense Item
            date={props.item[0].date} 
            title={props.item[0].title} 
            //title="shjdbfv"
            amount={props.item[0].amount}>

        </Expenseitem>

        <Expenseitem 
            //passing data to expense Item
            date={props.item[0].date} 
            title={props.item[0].title} 
            //title="shjdbfv"
            amount={props.item[0].amount}>

        </Expenseitem>

        <Expenseitem 
            //passing data to expense Item
            date={props.item[1].date} 
            title={props.item[1].title} 
            //title="shjdbfv"
            amount={props.item[1].amount}>
        </Expenseitem>

        <Expenseitem 
            //passing data to expense Item
            date={props.item[2].date} 
            title={props.item[2].title} 
            //title="shjdbfv"
            amount={props.item[2].amount}>

        </Expenseitem>

        <Expenseitem 
            //passing data to expense Item
            date={props.item[3].date} 
            title={props.item[3].title} 
            //title="shjdbfv"
            amount={props.item[3 ].amount}>

        </Expenseitem>

        </Card>
    )
    
};

export default Expenses;