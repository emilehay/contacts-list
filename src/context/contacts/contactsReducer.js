import {
    LIST_CONTACTS,
    SET_LOADING,
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SET_EDITING,
    SET_CURRENT_CONTACT,
} from '../types';

export default (state, action) => {
    switch(action.type){
        case ADD_CONTACT: {
            return {
                ...state,
                contacts: action.payload,
            }
        }
        case UPDATE_CONTACT: {
            return {
                ...state,
                constacts: action.payload,
                editing: false,
            }
        }
        case SET_CURRENT_CONTACT: {
            return {
                ...state,
                current_contact: action.payload,
            }
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                contacts: action.payload,
            }
        }
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
        case SET_EDITING:
            return {
                ...state,
                editing: true,
            }
        default:
            return state;
    }
}