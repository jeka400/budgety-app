import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const IncomeItem = ({ income, onMouseOverItem, renderNumber, onDeleteButton }) => {
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

    const incomeNum = renderNumber(parseInt(income.value).toFixed(2));

    return (
        <li onMouseOver={ () => onMouseOverItem() } onMouseLeave={ () => onMouseLeaveItem() }  >
            <div className="listItem">
                <div>{ income.description } </div>
                <div>{ incomeNum }</div>
                <button type="button"
                    onClick={ () => onDeleteButton(income.id) }
                    id={ income.id }
                    ref={ setDeleteButtonElRef }
                    className="hidden deleteButtonIncome">
                    <FontAwesomeIcon icon={faTimes} 
                />
                </button>                            
            </div>
        </li>
    )
}

export default IncomeItem;