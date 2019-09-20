import {
    CREATE_EXPENSE,
    DELETE_EXPENSE,
    FETCH_EXPENSES
} from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_EXPENSES:
            var payloadNew = {
                value: 0,
                description: ''
            };
                payloadNew = action.payload.map(pay => {
                pay.value = parseInt(pay.value);
                pay.description = pay.description;
                return pay;
            })
            return { ...state, ..._.mapKeys(payloadNew, 'id') };
        case CREATE_EXPENSE:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_EXPENSE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}