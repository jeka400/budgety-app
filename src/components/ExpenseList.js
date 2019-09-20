import React from 'react';
import { deleteExpense } from '../actions';
import { connect } from 'react-redux';
import './styles/List.css';
import ExpenseItem from './ExpenseItem';

class ExpenseList extends React.Component {
    onDeleteButton = (id) => {
        this.props.deleteExpense(id);
    }

    renderExpenses = () => {
        return (
            <ol>
                {this.props.expenseList.map(expense => {
                    return (
                        <ExpenseItem 
                            expense={ expense } 
                            key={ expense.id } 
                            renderNumber={ this.props.renderNumber }
                            onDeleteButton={ this.onDeleteButton }
                        />
                    )                    
                })}
            </ol>
        ) 
    }

    render() {
        return (
            <div>
                {this.renderExpenses()}
            </div>               
        )
    }
}

export default connect(null, { deleteExpense })(ExpenseList);