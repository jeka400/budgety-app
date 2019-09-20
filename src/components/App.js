import React from 'react';
import Total from './Total';
import { connect } from 'react-redux';
import { fetchIncomes, fetchExpenses, createIncome, createExpense } from '../actions';
import AddForm from './AddForm';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import './styles/App.css';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchIncomes();
        this.props.fetchExpenses();
    }

    renderDate() {
        const getMonthNum = new Date().getMonth()+1;
        const getYearNum = new Date().getFullYear();
        var month = '';
        switch(getMonthNum) {
            case 1: 
                month = "January";
                break;
            case 2: 
                month = "February";
                break;
            case 3:
                month = "March";
                break;
            case 4: 
                month = "April";
                break
            case 5:     
                month = "May";
                break;
            case 6: 
                month = "June";
                break;
            case 7: 
                month = "July";
                break;
            case 8: 
                month = "August";
                break;
            case 9: 
                month = "September";
                break;
            case 10: 
                month = "October";
                break;
            case 11: 
                month = "November";
                break;
            case 12: 
                month = "December";
                break;
            default: 
                month = "";
        }
        const date = `${month} ${getYearNum}`;
        return date;
    }

    renderNumber = (num) => {
        if(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    renderTotalIncome = () => {
        var incomeValue = 0;
        if(this.props.incomes) {
            this.props.incomes.map(income => {
                if(income.value) {
                    incomeValue += parseInt(income.value);
                }
            });
            return incomeValue;
        }  
    }

    renderTotalExpenses = () => {
        var expensesValue = 0;
        if(this.props.expenses) {
            this.props.expenses.map(expense => {
                if(expense.value) {
                    expensesValue += parseInt(expense.value);
                }
            });
            return expensesValue;
        }  
    }

    renderTotalIncomeNum = () => {
        if(this.renderTotalIncome()) {
            return this.renderNumber(this.renderTotalIncome());
        }
    }

    renderTotalExpensesNum = () => {
        if(this.renderTotalExpenses()) {
            return this.renderNumber(this.renderTotalExpenses());
        }
    }

    renderTotal = () => {
        const total = this.renderTotalIncome() - this.renderTotalExpenses();
        if(total > 0) {
            const totalNum = this.renderNumber(total.toFixed(2));
            return (
                `${totalNum}`
            )
        } else {
            const totalNum = this.renderNumber(total.toFixed(2));
            return (
                `${totalNum}`
            )
        }
    }

    onSubmit = formValues => {
        if(formValues.category === "income") {
            this.props.createIncome(formValues);
        } else if(formValues.category === "expense") {
            this.props.createExpense(formValues)
        }
    }

    renderPage = () => {
        return (
            <div>
                <section className="total">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="text-center date">Available Budget in { this.renderDate() }:</h5>
                                <h3 className="renderTotal">{this.renderTotal()}</h3>
                                <Total title="INCOME" sign="+" totalNum={ this.renderTotalIncomeNum() } color="#28B9B5" />
                                <Total title="EXPENSES" sign="-" totalNum={ this.renderTotalExpensesNum() } color='#FF5049' />
                            </div>
                        </div>
                    </div>
                    </section>
                    <section className="form">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <AddForm onSubmit={ this.onSubmit } />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="lists">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="listTitleIncome">INCOMES</h6>
                                <IncomeList incomelist={this.props ? this.props.incomes : null} renderNumber={this.renderNumber} />
                            </div>
                            <div className="col-md-6">
                                <h6 className="listTitleExpenses">EXPENSES</h6>
                                <ExpenseList expenseList={this.props ? this.props.expenses : null} renderNumber={this.renderNumber} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    render() {
        return (
            <div>{this.renderPage()}</div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        incomes: Object.values(state.incomes),
        expenses: Object.values(state.expenses)
    }
}

export default connect(mapStateToProps, {fetchIncomes, fetchExpenses, createIncome, createExpense })(App);