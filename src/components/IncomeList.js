import React from 'react';
import { connect } from 'react-redux';
import './styles/List.css';
import { deleteIncome } from '../actions';
import IncomeItem from './IncomeItem';

class IncomeList extends React.Component {
    onDeleteButton = (id) => {
        this.props.deleteIncome(id);
    }

    renderIncomes = () => {
        return (
            <ol>
                {this.props.incomelist.map(income => {
                    return (
                        <IncomeItem 
                            income={ income } 
                            key={ income.id } 
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
                {this.renderIncomes()}
            </div>               
        )
    }
}

export default connect(null, { deleteIncome })(IncomeList);