import {
    CREATE_INCOME,
    DELETE_INCOME,
    FETCH_INCOMES,
} from '../actions/types';
import _ from 'lodash';


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_INCOMES:
            var payloadNew = {
                value: 0,
                description: ''
            };
             payloadNew = action.payload.map(pay => {
                pay.value = parseInt(pay.value);
                // pay.description = pay.description;
                return pay;
            })
            return { ...state, ..._.mapKeys(payloadNew, 'id') };
        case CREATE_INCOME:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_INCOME:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};