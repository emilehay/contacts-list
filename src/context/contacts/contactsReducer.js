import {
    LIST_CONTACTS,
    SET_LOADING,
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
} from '../types';

export default (state, action) => {
    switch(action.type){
        case LIST_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}