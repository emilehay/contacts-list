import React, { useReducer } from 'react';
import ContactsContext from './contactsContext';
import ContactsReducer from './contactsReducer';
import {
    LIST_CONTACTS,
    SET_LOADING,
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SET_EDITING,
    SET_CURRENT_CONTACT,
} from '../types';

const ContactsState = props => {

    const initialState = {
        contacts: [],
        current_contact: {},
        editing: false,
        loading: false,
    }

    const [state, dispatch] = useReducer(ContactsReducer, initialState);

    //Set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    //Set editing
    const setEditing = () => dispatch({ type: SET_EDITING })

    //Set current contact
    const setCurrentContact = (index) => {

        const currentContact = {
            name: state.contacts[index].first_name,
            surname: state.contacts[index].last_name,
            email: state.contacts[index].email,
        };

        dispatch({
            type: SET_CURRENT_CONTACT,
            payload: currentContact,
        })   

    }

    //List contacts
    const listContacts = () => {

        setLoading();

        const fakeUsersResult = [
            {
                name: 'John',
                surname: 'Doe',
                email: 'johndoe@gmail.com',
            },
            {
                name: 'Jane',
                surname: 'Doe',
                email: 'janedoe@gmail.com',
            },
            {
                name: 'Foo',
                surname: 'Bar',
                email: 'foobar@gmail.com',
            },
        ];

        setTimeout(() => {
            dispatch({
                type: LIST_CONTACTS,
                payload: fakeUsersResult,
            })
        }, 1000);

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
            name: first_name,
            surname: last_name,
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
            name: first_name,
            surname: last_name,
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
            setEditing,
            setCurrentContact,
        }}
    >
        {props.children}
    </ContactsContext.Provider>

}

export default ContactsState;