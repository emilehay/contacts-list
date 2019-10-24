import React, { useReducer } from 'react';
import ContactsContext from './contactsContext';
import ContactsReducer from './contactsReducer';
import {
    LIST_CONTACTS,
    SET_LOADING,
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT_CONTACT,
} from '../types';

const ContactsState = props => {

    const initialState = {
        contacts: [],
        current_contact: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(ContactsReducer, initialState);

    //Set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    //Set current contact
    const setCurrentContact = (index) => {

        const currentContact = {
            first_name: state.contacts[index].first_name,
            last_name: state.contacts[index].last_name,
            email: state.contacts[index].email,
        };

        dispatch({
            type: SET_CURRENT_CONTACT,
            payload: currentContact,
        })   

    }

    //List contacts
    const listContacts = () => {

        const fakeUsersResult = [
            {
                first_name: 'John',
                last_name: 'Doe',
                email: 'johndoe@gmail.com',
            },
            {
                first_name: 'Jane',
                last_name: 'Doe',
                email: 'janedoe@gmail.com',
            },
            {
                first_name: 'Foo',
                last_name: 'Bar',
                email: 'foobar@gmail.com',
            },
        ];

        dispatch({
            type: LIST_CONTACTS,
            payload: fakeUsersResult,
        })

    }

    //Delete contact
    const deleteContact = index => {

        const result = state.contacts;
        result.splice(index,1);

        dispatch({
            type: DELETE_CONTACT,
            payload: result,
        })
        
    }

    //Add contact
    const addContact = (first_name, last_name, email) => {

        const result = state.contacts;

        const contact = {
            first_name: first_name,
            last_name: last_name,
            email: email,
        };

        result.push(contact);

        dispatch({
            type: ADD_CONTACT,
            payload: result,
        })

    }

    //Edit contact
    const editContact = (index, first_name, last_name, email) => {

        const contact = {
            first_name: first_name,
            last_name: last_name,
            email: email,
        };

        const result = state.contacts[index] = contact;

        dispatch({
            type: UPDATE_CONTACT,
            payload: result,
        })

    }

    return <ContactsContext.Provider
        value={{
            contacts: state.contacts,
            loading: state.loading,
            listContacts,
            setLoading,
            deleteContact,
            addContact,
            editContact,
            setCurrentContact,
        }}
    >
        {props.children}
    </ContactsContext.Provider>

}

export default ContactsState;