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

    return <ContactsContext.Provider
        value={{
            contacts: state.contacts,
            loading: state.loading,
            listContacts,
            setLoading,
        }}
    >
        {props.children}
    </ContactsContext.Provider>

}

export default ContactsState;