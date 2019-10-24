import React, { useContext, useEffect } from 'react'
import ContactItem from '../contact-item/contact-item'
import Loader from '../loader/loader'
import './contact-list.scss'
import ContactsContext from './../../context/contacts/contactsContext'

const ContactList = () => {

    const contactsContext = useContext(ContactsContext);
    const { contacts, loading, listContacts, setLoading } = contactsContext;

    useEffect(() => {
        if(contacts.length === 0){
            setLoading();
            setTimeout(() => {
                listContacts();
            }, 1000);
        }
    }, [])

    if(loading){
        return <Loader />
    } else {
        return (
            <div className='contact-list'>
                {
                    contacts.map((contact, index) => {
                        return <ContactItem key={index} index={index} contact={contact} />
                    })
                }
            </div>
        )
    }
        
}

export default ContactList
