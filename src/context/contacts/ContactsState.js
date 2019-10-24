import React, { useReducer } from 'react';
import ContactsContext from './contactsContext';
import ContactsReducer from './contactsReducer';
import {
    LIST_CONTACTS,
    SET_LOADING,
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
} from '../types';

const ContactsState = props => {

    const initialState = {
        contacts: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(ContactsReducer, initialState);

    //Set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    //List contacts
    const listContacts = () => {

        const localContacts = window.localStorage.getItem('contacts');

        if(localContacts === undefined || localContacts === null || localContacts.length === 0){

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

            window.localStorage.setItem('contacts', JSON.stringify(fakeUsersResult));

            dispatch({
                type: LIST_CONTACTS,
                payload: fakeUsersResult,
            })

        } else {

            const localContactsObj = JSON.parse(localContacts);

            dispatch({
                type: LIST_CONTACTS,
                payload: localContactsObj,
            })

        }

    }

    //Delete contact
    const deleteContact = index => {

        const result = state.contacts;
        result.splice(index,1);

        window.localStorage.setItem('contacts', JSON.stringify(result));

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

        window.localStorage.setItem('contacts', JSON.stringify(result));

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

        window.localStorage.setItem('contacts', JSON.stringify(state.contacts));

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
        }}
    >
        {props.children}
    </ContactsContext.Provider>

}

export default ContactsState;