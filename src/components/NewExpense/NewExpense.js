import react from 'react-dom'

import './NewExpense.css'

import ExpenseForm from './ExpenseForm';

function NewExpense (){
    return (
        <div className='new-expense'>
            <ExpenseForm>
                
            </ExpenseForm>
        </div>
    );
}

export default NewExpense;