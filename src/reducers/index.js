import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import incomeReducer from './incomeReducer';
import expenseReducer from './expenseReducer';

export default combineReducers({
    form: formReducer,
    incomes: incomeReducer,
    expenses: expenseReducer
});