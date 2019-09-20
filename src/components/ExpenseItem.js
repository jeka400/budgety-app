import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ExpenseItem = ({ expense, onMouseOverItem, renderNumber, onDeleteButton }) => {
    var deleteButtonRefs = [];

    var setDeleteButtonElRef = element => {
        deleteButtonRefs.push(element);
    }

    var onMouseOverItem = () => {
        deleteButtonRefs.forEach(deleteButtonRef => {
            deleteButtonRef.classList.remove('hidden');
        });
    }

    var onMouseLeaveItem = () => {
        deleteButtonRefs.forEach(deleteButtonRef => {
            deleteButtonRef.classList.add('hidden');
        });
    }

    const expenseNum = renderNumber(parseInt(expense.value).toFixed(2));

    return (
        <li onMouseOver={ () => onMouseOverItem() } onMouseLeave={ () => onMouseLeaveItem() }  >
            <div className="listItem">
                <div>{ expense.description } </div>
                <div>{ expenseNum }</div>
                <button type="button"
                    onClick={ () => onDeleteButton(expense.id) }
                    id={ expense.id }
                    ref={ setDeleteButtonElRef }
                    className="hidden deleteButtonExpense">
                    <FontAwesomeIcon icon={faTimes} 
                />
                </button>                            
            </div>
        </li>
    )
}

export default ExpenseItem;