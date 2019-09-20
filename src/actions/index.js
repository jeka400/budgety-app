import {
    CREATE_INCOME,
    CREATE_EXPENSE,
    DELETE_INCOME,
    DELETE_EXPENSE,
    FETCH_INCOMES,
    FETCH_EXPENSES
} from './types';
import budget from '../apis/budget';

export const createIncome = formValues => async (dispatch) => {
    const response = await budget.post('/incomes', { ...formValues });
    dispatch({ 
        type: CREATE_INCOME,
        payload: response.data
    })
};

export const createExpense = formValues => async (dispatch) => {
    const response = await budget.post('/expenses', { ...formValues });
    dispatch({ 
        type: CREATE_EXPENSE,
        payload: response.data
    })
};

export const fetchIncomes = () => async dispatch => {
    const response = await budget.get('/incomes');
    dispatch({
        type: FETCH_INCOMES,
        payload: response.data
    })
};

export const fetchExpenses = () => async dispatch => {
    const response = await budget.get('/expenses');
    dispatch({
        type: FETCH_EXPENSES,
        payload: response.data
    })
};

export const deleteIncome = (id) => async dispatch => {
    await budget.delete(`/incomes/${id}`);
    dispatch({
        type: DELETE_INCOME,
        payload: id
    })
};

export const deleteExpense = (id) => async dispatch => {
    await budget.delete(`/expenses/${id}`);
    dispatch({
        type: DELETE_EXPENSE,
        payload: id
    })
};
