import React, { useState } from 'react'
import ContactItem from '../contact-item/contact-item'
import './contact-list.scss';

const ContactList = () => {

    const [contacts, setContacts] = useState([
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
    ])

    return (
        <div className='contact-list'>
            {
                contacts.map((contact, index) => {
                    return <ContactItem key={index} contact={contact} />
                })
            }
        </div>
    )
        
}

export default ContactList
